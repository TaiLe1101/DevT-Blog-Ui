import classNames from 'classnames/bind';

import styles from '../../Home.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function ScrollDown() {
    return (
        <div className={cx('home__scroll')}>
            <a
                href="#about"
                className={`${cx('home__scroll-button')} ${cxm(
                    'button--flex'
                )}`}
            >
                <i className="uil uil-mouse-alt"></i>
                <span className={cx('home__scroll-name')}>Scroll Down</span>
                <i
                    className={`uil uil-arrow-down ${cx('home__scroll-arrow')}`}
                ></i>
            </a>
        </div>
    );
}

export default ScrollDown;
