import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

interface PropsTypeFooter {}

function Footer({}: PropsTypeFooter) {
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
          <a href="https://www.instagram.com/tai_leeeee" className={cx('footer__social-link')} target="_blank" rel="noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://facebook.com/TaiLe1101" className={cx('footer__social-link')} target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://github.com/TaiLe1101" className={cx('footer__social-link')} target="_blank" rel="noreferrer">
            <i className="uil uil-twitter"></i>
          </a>
        </div>

        <span className={cx('footer__copy')}>&#169; DevT</span>
      </div>
    </div>
  );
}

export default Footer;
