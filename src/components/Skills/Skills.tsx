import classNames from 'classnames/bind';

import styles from './Skills.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';
import Frontend from './components/Frontend/Frontend';
import Backend from './components/Backend/Backend';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function Skills() {
    return (
        <div className={`${cx('skills')} ${cxm('section')}`} id="skills">
            <h2 className={`${cxm('section__title')}`}>Skills</h2>
            <span className={`${cxm('section__subtitle')}`}>
                My technical level
            </span>

            <div
                className={`${cx('skills__container')} ${cxm(
                    'container',
                    'grid'
                )}`}
            >
                <Frontend></Frontend>
                <Backend></Backend>
            </div>
        </div>
    );
}

export default Skills;
