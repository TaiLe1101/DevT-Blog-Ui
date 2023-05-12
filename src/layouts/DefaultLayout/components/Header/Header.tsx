import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import routes from '~/configs/route';
import { useState } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeHeader {}

function Header({}: PropsTypeHeader) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className={cx('header')}>
      <nav className={cx('nav', 'container')}>
        <Link to={routes.home} className={cx('nav__logo')}>
          DevT
        </Link>

        <div className={cx('nav__menu', { 'show-menu': showMenu })}>
          <ul className={cx('nav__list')}>
            <li className={cx('nav__item')}>
              <Link to={routes.home} className={cx('nav__link')}>
                <i className={`uil uil-estate ${cx('nav__icon')}`}></i> Home
              </Link>
            </li>
            <li className={cx('nav__item')}>
              <Link to={routes.blog} className={cx('nav__link')}>
                <i className={`uil uil-blogger-alt ${cx('nav__icon')}`}></i> Blog
              </Link>
            </li>
            <li className={cx('nav__item')}>
              <Link to={routes.login} className={cx('nav__link')}>
                <i className={`bx bx-lock-alt ${cx('nav__icon')}`}></i>Login
              </Link>
            </li>
          </ul>

          <i className={`uil uil-times ${cx('nav__close')}`} onClick={() => setShowMenu(false)}></i>
        </div>

        <div className={cx('nav__toggle')} onClick={() => setShowMenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
