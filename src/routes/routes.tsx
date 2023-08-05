import classNames from 'classnames/bind';

import ROUTES from '~/configs/route';

import styles from '~/layouts/DefaultLayout/components/Header/Header.module.scss';
import PortfolioLayout from '~/layouts/PortfolioLayout';
import UserLayout from '~/layouts/UserLayout';

import Admin from '~/pages/Admin';
import Post from '~/pages/Admin/Post';
import { PostCreate, PostEdit } from '~/pages/Admin/Post/PostControl';
import Project from '~/pages/Admin/Project/Project';
import Setting from '~/pages/Admin/Setting';
import Blog from '~/pages/Blog';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import SettingUser from '~/pages/SettingUser';
import { RouteType } from '~/types/route.type';

const cx = classNames.bind(styles);

const publicRoutes: RouteType[] = [
    {
        name: 'Home',
        icon: <i className={cx('uil', 'uil-estate', 'nav__icon')}></i>,
        path: ROUTES.HOME,
        component: Home,
        layout: PortfolioLayout,
    },
    {
        name: 'Blog',
        icon: <i className={cx('uil', 'uil-blogger-alt', 'nav__icon')}></i>,
        path: ROUTES.BLOG,
        component: Blog,
    },
    {
        name: 'Login',
        icon: <i className={cx('bx', 'bx-shield', 'nav__icon')}></i>,
        path: ROUTES.LOGIN,
        component: Login,
        layout: null,
    },
    {
        name: 'Register',
        icon: <i className={cx('bx', 'bxs-user-check', 'nav__icon')}></i>,
        path: ROUTES.REGISTER,
        component: Register,
        layout: null,
    },
];

const privateRoutes: RouteType[] = [
    {
        name: 'Admin',
        icon: <i className={cx('uil', 'uil-estate', 'nav__icon')}></i>,
        path: ROUTES.ADMIN,
        component: Admin,
        layout: UserLayout,
    },
    {
        name: 'UserInfo',
        icon: <i className={cx('uil', 'uil-estate', 'nav__icon')}></i>,
        path: ROUTES.USER_INFO,
        component: SettingUser,
        layout: UserLayout,
    },
    {
        name: 'Post',
        icon: <i className={cx('uil', 'uil-airplay', 'nav__icon')}></i>,
        path: ROUTES.ADMIN_POST,
        component: Post,
        layout: UserLayout,
    },
    {
        name: 'Post Edit',
        icon: <i className={cx('uil', 'uil-cog', 'nav__icon')}></i>,
        path: ROUTES.ADMIN_POST_EDIT,
        component: PostEdit,
        layout: UserLayout,
    },
    {
        name: 'Post Create',
        icon: <i className={cx('uil', 'uil-cog', 'nav__icon')}></i>,
        path: ROUTES.ADMIN_POST_CREATE,
        component: PostCreate,
        layout: UserLayout,
    },
    {
        name: 'Project',
        icon: <i className={cx('uil', 'uil-airplay', 'nav__icon')}></i>,
        path: ROUTES.ADMIN_PROJECT,
        component: Project,
        layout: UserLayout,
    },
    {
        name: 'Setting',
        icon: <i className={cx('uil', 'uil-cog', 'nav__icon')}></i>,
        path: ROUTES.SETTING,
        component: Setting,
        layout: UserLayout,
    },
];

export { privateRoutes, publicRoutes };
