import classNames from 'classnames/bind';

import styles from './Portfolio.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

import Projects from './components/Projects/Projects';
import { ProjectModel } from '~/models/ProjectModel';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

export interface PortfolioProps {
    projects: ProjectModel[];
}

function Portfolio({ projects }: PortfolioProps) {
    return (
        <div className={`${cx('portfolio')} ${cxm('section')}`} id="portfolio">
            <h2 className={`${cxm('section__title')}`}>Dự án</h2>
            <span className={`${cxm('section__subtitle')}`}>Dự án của tôi</span>

            <Projects projects={projects}></Projects>
        </div>
    );
}

export default Portfolio;
