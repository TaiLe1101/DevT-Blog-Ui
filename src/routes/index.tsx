import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import routes from '~/configs/route';

import PortfolioLayout from '~/layouts/PortfolioLayout';
import styles from '~/layouts/DefaultLayout/components/Header/Header.module.scss';

import Blog from '~/pages/Blog';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

import Admin from '~/pages/Admin';

import SettingUser from '~/pages/SettingUser';
import UserLayout from '~/layouts/UserLayout';
import Post from '~/pages/Admin/Post';

const cx = classNames.bind(styles);

type Route = {
    name: string;
    icon?: ReactNode;
    path: string;
    component: React.FC<any>;
    layout?: React.FC<any> | null;
};

const publicRoutes: Route[] = [
    {
        name: 'Home',
        icon: <i className={cx('uil', 'uil-estate', 'nav__icon')}></i>,
        path: routes.home,
        component: Home,
        layout: PortfolioLayout,
    },
    {
        name: 'Blog',
        icon: <i className={cx('uil', 'uil-blogger-alt', 'nav__icon')}></i>,
        path: routes.blog,
        component: Blog,
    },
    {
        name: 'Login',
        icon: <i className={cx('bx', 'bx-shield', 'nav__icon')}></i>,
        path: routes.login,
        component: Login,
        layout: null,
    },
    {
        name: 'Register',
        icon: <i className={cx('bx', 'bxs-user-check', 'nav__icon')}></i>,
        path: routes.register,
        component: Register,
        layout: null,
    },
];

const privateRoutes: Route[] = [
    {
        name: 'Admin',
        icon: <i className={cx('uil', 'uil-estate', 'nav__icon')}></i>,
        path: routes.admin,
        component: Admin,
        layout: UserLayout,
    },
    {
        name: 'UserInfo',
        icon: <i className={cx('uil', 'uil-estate', 'nav__icon')}></i>,
        path: routes.userInfo,
        component: SettingUser,
        layout: UserLayout,
    },
    {
        name: 'Post',
        icon: <i className={cx('uil', 'uil-airplay', 'nav__icon')}></i>,
        path: routes.adminPost,
        component: Post,
        layout: UserLayout,
    },
];

export { publicRoutes, privateRoutes };
