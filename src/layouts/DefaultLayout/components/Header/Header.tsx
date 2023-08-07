import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '~/configs/route';
import { useAppSelector } from '~/hooks';
import { publicRoutes } from '~/routes';
import UserInfo from '../UserInfo/UserInfo';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [routeList, setRouteList] = useState(publicRoutes);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const currentUser = useAppSelector((state) => state.auth.currentUser);
    useEffect(() => {
        if (currentUser) {
            setRouteList((prev) =>
                prev.filter(
                    (item) => item.name !== 'Register' && item.name !== 'Login'
                )
            );
        } else {
            setRouteList(publicRoutes);
        }
    }, [currentUser]);

    return (
        <div className={cx('header')}>
            <nav className={cx('nav', 'container')}>
                <Link to={ROUTES.HOME} className={cx('nav__logo')}>
                    DevT
                </Link>

                <div className={cx('nav__menu', { 'show-menu': showMenu })}>
                    <ul className={cx('nav__list')}>
                        {routeList.map((route, index) => {
                            return (
                                <li className={cx('nav__item')} key={index}>
                                    <Link
                                        to={route.path}
                                        className={cx('nav__link')}
                                    >
                                        {route.icon} {route.name}
                                    </Link>
                                </li>
                            );
                        })}

                        {currentUser && (
                            <>
                                <UserInfo
                                    avatar={
                                        currentUser.avatar ||
                                        '/images/no-image.jpg'
                                    }
                                ></UserInfo>
                            </>
                        )}
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
            </nav>
        </div>
    );
}

export default Header;
