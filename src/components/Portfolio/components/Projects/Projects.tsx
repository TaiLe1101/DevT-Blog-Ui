import { Fragment, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Projects.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

import { projects, projectNav } from '../../Data';
import ProjectItems from './ProjectItems';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

interface PropsTypeProjects {}

function Projects({}: PropsTypeProjects) {
  const [activeNav, setActiveNav] = useState<number>(0);

  const handleActiveNav = (id: number) => {
    setActiveNav(id);
  };

  return (
    <>
      <div className={cx('projects__filters')}>
        {projectNav.map((nav) => {
          return (
            // <span
            //   key={nav.id}
            //   className={cx('projects__item', { 'projects__item-active': nav.id === activeNav })}
            //   onClick={() => {
            //     handleActiveNav(nav.id);
            //   }}
            // >
            //   {nav.name}
            // </span>
            <Button
              text={nav.name}
              key={nav.id}
              size="small"
              className={cx('projects__item', { 'projects__item-active': nav.id === activeNav })}
              onClick={() => {
                handleActiveNav(nav.id);
              }}
            ></Button>
          );
        })}
      </div>

      <div className={`${cx('projects__container')} ${cxm('container', 'grid')}`}>
        {projects.map((project) => {
          if (activeNav === 0) {
            return <ProjectItems data={project} key={project.id}></ProjectItems>;
          } else {
            if (activeNav === project.categoryId) {
              return <ProjectItems data={project} key={project.id}></ProjectItems>;
            } else {
              return <Fragment key={project.id}></Fragment>;
            }
          }
        })}
      </div>
    </>
  );
}

export default Projects;
