import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import routes from '~/configs/route';

const cx = classNames.bind(styles);

interface PropsTypeHeader {}

function Header({}: PropsTypeHeader) {
  return (
    <div className={cx('header')}>
      <nav className={cx('nav', 'container')}>
        <Link to={routes.home} className={cx('nav__logo')}>
          DevT
        </Link>

        <ul className={cx('nav__menu')}>
          <li className={cx('nav__item')}>
            <Link to={routes.home} className={cx('nav__link')}>
              Home
            </Link>
          </li>
          <li className={cx('nav__item')}>
            <Link to={routes.blog} className={cx('nav__link')}>
              Blog
            </Link>
          </li>
          <li className={cx('nav__item')}>
            <Link to={routes.login} className={cx('nav__link')}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
