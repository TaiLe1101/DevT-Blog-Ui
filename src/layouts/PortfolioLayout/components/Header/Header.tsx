import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Header.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';
import routes from '~/configs/route';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function Header() {
    const [showLineHeader, setShowLineHeader] = useState<boolean>(true);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [activeNav, setActiveNav] = useState<string>('#home');

    window.addEventListener('scroll', function (e) {
        if (this.scrollY >= 560) {
            setShowLineHeader(true);
        } else {
            setShowLineHeader(false);
        }
    });

    return (
        <div className={cx('header', { 'scroll-header': showLineHeader })}>
            <div className={`${cx('nav')} ${cxm('container')} `}>
                <a href="/" className={cx('nav__logo')}>
                    DevT
                </a>

                <div className={cx('nav__menu', { 'show-menu': showMenu })}>
                    <ul className={`${cx('nav__list')} ${cxm('grid')}`}>
                        <li
                            onClick={() => setActiveNav('#home')}
                            className={cx('nav__item')}
                        >
                            <a
                                href="#home"
                                className={cx('nav__link', {
                                    'active-link': activeNav === '#home',
                                })}
                            >
                                <i
                                    className={`uil uil-estate ${cx(
                                        'nav__icon'
                                    )}`}
                                ></i>{' '}
                                Home
                            </a>
                        </li>

                        <li
                            onClick={() => setActiveNav('#about')}
                            className={cx('nav__item')}
                        >
                            <a
                                href="#about"
                                className={cx('nav__link', {
                                    'active-link': activeNav === '#about',
                                })}
                            >
                                <i
                                    className={`uil uil-user ${cx(
                                        'nav__icon'
                                    )}`}
                                ></i>{' '}
                                About
                            </a>
                        </li>

                        <li
                            onClick={() => setActiveNav('#skills')}
                            className={cx('nav__item')}
                        >
                            <a
                                href="#skills"
                                className={cx('nav__link', {
                                    'active-link': activeNav === '#skills',
                                })}
                            >
                                <i
                                    className={`uil uil-file-alt ${cx(
                                        'nav__icon'
                                    )}`}
                                ></i>{' '}
                                Skills
                            </a>
                        </li>

                        <li
                            onClick={() => setActiveNav('#services')}
                            className={cx('nav__item')}
                        >
                            <a
                                href="#services"
                                className={cx('nav__link', {
                                    'active-link': activeNav === '#services',
                                })}
                            >
                                <i
                                    className={`uil uil-briefcase-alt ${cx(
                                        'nav__icon'
                                    )}`}
                                ></i>{' '}
                                Services
                            </a>
                        </li>

                        <li
                            onClick={() => setActiveNav('#portfolio')}
                            className={cx('nav__item')}
                        >
                            <a
                                href="#portfolio"
                                className={cx('nav__link', {
                                    'active-link': activeNav === '#portfolio',
                                })}
                            >
                                <i
                                    className={`uil uil-scenery ${cx(
                                        'nav__icon'
                                    )}`}
                                ></i>{' '}
                                Portfolio
                            </a>
                        </li>
                        <li
                            onClick={() => setActiveNav('#contact')}
                            className={cx('nav__item')}
                        >
                            <a
                                href="#contact"
                                className={cx('nav__link', {
                                    'active-link': activeNav === '#contact',
                                })}
                            >
                                <i
                                    className={`uil uil-message ${cx(
                                        'nav__icon'
                                    )}`}
                                ></i>{' '}
                                Contact
                            </a>
                        </li>

                        <li className={cx('nav__item')}>
                            <Link to={routes.blog} className={cx('nav__link')}>
                                <i
                                    className={`uil uil-blogger-alt ${cx(
                                        'nav__icon'
                                    )}`}
                                ></i>{' '}
                                Blog
                            </Link>
                        </li>
                    </ul>

                    <i
                        className={`uil uil-times ${cx('nav__close')}`}
                        onClick={() => setShowMenu(false)}
                    ></i>
                </div>

                <div
                    className={cx('nav__toggle')}
                    onClick={() => setShowMenu(true)}
                >
                    <i className="uil uil-apps"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
