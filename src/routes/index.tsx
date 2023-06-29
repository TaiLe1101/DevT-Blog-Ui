import classNames from 'classnames/bind';

import routes from '~/configs/route';

import PortfolioLayout from '~/layouts/PortfolioLayout';
import styles from '~/layouts/DefaultLayout/components/Header/Header.module.scss';
import UserLayout from '~/layouts/UserLayout';

import Blog from '~/pages/Blog';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import SettingUser from '~/pages/SettingUser';
import Admin from '~/pages/Admin';
import Post from '~/pages/Admin/Post';
import Setting from '~/pages/Admin/Setting';
import { PostCreate, PostEdit } from '~/pages/Admin/Post/PostControl';
import { RouteType } from '~/types/route.type';
import Project from '~/pages/Admin/Project/Project';

const cx = classNames.bind(styles);

const publicRoutes: RouteType[] = [
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

const privateRoutes: RouteType[] = [
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
    {
        name: 'Post Edit',
        icon: <i className={cx('uil', 'uil-cog', 'nav__icon')}></i>,
        path: routes.adminPostEdit,
        component: PostEdit,
        layout: UserLayout,
    },
    {
        name: 'Post Create',
        icon: <i className={cx('uil', 'uil-cog', 'nav__icon')}></i>,
        path: routes.adminPostCreate,
        component: PostCreate,
        layout: UserLayout,
    },
    {
        name: 'Project',
        icon: <i className={cx('uil', 'uil-airplay', 'nav__icon')}></i>,
        path: routes.adminProject,
        component: Project,
        layout: UserLayout,
    },
    {
        name: 'Setting',
        icon: <i className={cx('uil', 'uil-cog', 'nav__icon')}></i>,
        path: routes.setting,
        component: Setting,
        layout: UserLayout,
    },
];

export { publicRoutes, privateRoutes };
