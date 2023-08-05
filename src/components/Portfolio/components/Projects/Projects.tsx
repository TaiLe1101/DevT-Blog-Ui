import classNames from 'classnames/bind';
import { useState } from 'react';

import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';
import styles from './Projects.module.scss';

import Button from '~/components/Button/Button';
import { projectNav } from '../../Data';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function Projects() {
    const [activeNav, setActiveNav] = useState(0);

    const handleActiveNav = (id: number) => {
        setActiveNav(id);
    };

    return (
        <>
            <div className={cx('projects__filters')}>
                {projectNav.map((nav) => {
                    return (
                        <Button
                            text={nav.name}
                            key={nav.id}
                            size="small"
                            className={cx('projects__item', {
                                'projects__item-active': nav.id === activeNav,
                            })}
                            onClick={() => {
                                handleActiveNav(nav.id);
                            }}
                        ></Button>
                    );
                })}
            </div>

            <div
                className={`${cx('projects__container')} ${cxm(
                    'container',
                    'grid'
                )}`}
            >
                {/* {false ? (
                    <p>Loading...</p>
                ) : (
                    [].map((project) => {
                        if (activeNav === 0) {
                            return (
                                <ProjectItems
                                    data={project}
                                    key={project.id}
                                ></ProjectItems>
                            );
                        } else {
                            if (activeNav === Number(project.categoryId)) {
                                return (
                                    <ProjectItems
                                        data={project}
                                        key={project.id}
                                    ></ProjectItems>
                                );
                            } else {
                                return <Fragment key={project.id}></Fragment>;
                            }
                        }
                    })
                )} */}
            </div>
        </>
    );
}

export default Projects;
