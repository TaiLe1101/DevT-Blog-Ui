import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Projects.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

import { projectNav, projects } from '../../Data';
import ProjectItems from './ProjectItems';
import Button from '~/components/Button/Button';
import { useFetch } from '~/hooks/useFetch';
import { ProjectType } from '~/types/project.type';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function Projects() {
    let [projectAPI, isLoading, error] = useFetch<ProjectType[]>(
        '/projects',
        []
    );

    if (error) {
        projectAPI = projects;
    }

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
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    projectAPI.map((project) => {
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
                )}
            </div>
        </>
    );
}

export default Projects;
