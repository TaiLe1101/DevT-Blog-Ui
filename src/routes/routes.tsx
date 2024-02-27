import classNames from 'classnames/bind';

import ROUTES from '~/configs/route';

import styles from '~/layouts/DefaultLayout/components/Header/Header.module.scss';
import PortfolioLayout from '~/layouts/PortfolioLayout';
import Home from '~/pages/Home';

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
];

const privateRoutes: RouteType[] = [];

export { privateRoutes, publicRoutes };
