import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import routes from '~/configs/route';
import { privateRoutes, publicRoutes } from '~/routes';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import UserInfo from '../UserInfo/UserInfo';

const cx = classNames.bind(styles);

interface PropsTypeHeader {}

function Header({}: PropsTypeHeader) {
    const [routeList, setRouteList] = useState(publicRoutes);

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const currentUser = useSelector(
        (state: RootState) => state.auth.login.data?.data
    );

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
                <Link to={routes.home} className={cx('nav__logo')}>
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
                                    avatar={currentUser.avatar}
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
