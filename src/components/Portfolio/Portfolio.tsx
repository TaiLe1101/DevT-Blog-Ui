import classNames from 'classnames/bind';

import styles from './Portfolio.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

import Projects from './components/Projects/Projects';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

interface PropsTypePortfolio {}

function Portfolio({}: PropsTypePortfolio) {
    return (
        <div className={`${cx('portfolio')} ${cxm('section')}`} id="portfolio">
            <h2 className={`${cxm('section__title')}`}>Projects</h2>
            <span className={`${cxm('section__subtitle')}`}>My projects</span>

            <Projects></Projects>
        </div>
    );
}

export default Portfolio;
