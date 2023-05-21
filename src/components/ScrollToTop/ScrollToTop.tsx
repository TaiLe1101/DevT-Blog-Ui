import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ScrollToTop.module.scss';

const cx = classNames.bind(styles);

function ScrollToTop() {
    const [showScrollUp, setShowScrollUp] = useState<boolean>(false);

    window.addEventListener('scroll', function (e) {
        if (this.scrollY >= 560) {
            setShowScrollUp(true);
        } else {
            setShowScrollUp(false);
        }
    });

    return (
        <span
            className={cx('scroll-up', { 'show-scroll': showScrollUp })}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <i className={`uil uil-arrow-up ${cx('scroll-up__icon')}`}></i>
        </span>
    );
}

export default ScrollToTop;
