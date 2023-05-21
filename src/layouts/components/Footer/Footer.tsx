import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer__container')}>
                <h1 className={cx('footer__title')}>DevT</h1>

                <ul className={cx('footer__list')}>
                    <li>
                        <a href="#about" className={cx('footer__link')}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#portfolio" className={cx('footer__link')}>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#testimonial" className={cx('footer__link')}>
                            Testimonial
                        </a>
                    </li>
                </ul>

                <div className={cx('footer__social')}>
                    <Button
                        href="https://facebook.com/TaiLe1101"
                        target="_blank"
                        className={cx('footer__social-link')}
                        size="small"
                        icon={<i className="bx bxl-facebook"></i>}
                    ></Button>

                    <Button
                        href="https://instagram.com/tai_leeee"
                        target="_blank"
                        className={cx('footer__social-link')}
                        size="small"
                        icon={<i className="bx bxl-instagram"></i>}
                    ></Button>

                    <Button
                        href="#"
                        target="_blank"
                        className={cx('footer__social-link')}
                        size="small"
                        icon={<i className="uil uil-twitter"></i>}
                    ></Button>
                </div>

                <span className={cx('footer__copy')}>&#169; DevT</span>
            </div>
        </div>
    );
}

export default Footer;
