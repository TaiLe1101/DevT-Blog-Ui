import classNames from 'classnames/bind';

import styles from '../../About.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function Info() {
    return (
        <div className={`${cx('about__info')} ${cxm('grid')}`}>
            <div className={cx('about__box')}>
                <i className={`bx bx-award ${cx('about__icon')}`}></i>
                <h3 className={cx('about__title')}>Kinh nghiệm</h3>
                <span className={cx('about__subtitle')}>1 năm làm việc</span>
            </div>
            <div className={cx('about__box')}>
                <i className={`bx bx-briefcase-alt ${cx('about__icon')}`}></i>
                <h3 className={cx('about__title')}>Hoàn thành</h3>
                <span className={cx('about__subtitle')}>10+ Dự án</span>
            </div>
            <div className={cx('about__box')}>
                <i className={`bx bx-support ${cx('about__icon')}`}></i>
                <h3 className={cx('about__title')}>Hổ trợ</h3>
                <span className={cx('about__subtitle')}>Online 24/7</span>
            </div>
        </div>
    );
}

export default Info;
