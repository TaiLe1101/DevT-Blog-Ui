import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import routes from '~/configs/route';

import SidebarMenu from './SidebarMenu';
import { ControlNavType } from '~/types/sidebar.type';

const cx = classNames.bind(styles);

interface PropsTypeSidebar {
    showSidebar: boolean;
}

const CONTROL_NAV_LIST: ControlNavType[] = [
    {
        id: 1,
        title: 'Home',
        classIcon: cx('bx', 'bx-home-alt-2'),
        path: routes.home,
        level: 0,
    },
    {
        id: 2,
        title: 'Admin',
        classIcon: cx('bx', 'bx-wrench'),
        path: routes.admin,
        level: 0,
        children: [
            {
                id: 21,
                title: 'Post',
                classIcon: cx('uil', 'uil-postcard', 'nav__icon'),
                level: 1,
                path: routes.adminPost,
                children: [
                    {
                        id: 211,
                        title: 'Create',
                        classIcon: cx('uil', 'uil-arrow', 'nav__icon'),
                        level: 2,
                        path: routes.adminPost,
                    },
                    {
                        id: 212,
                        title: 'Edit',
                        classIcon: cx('uil', 'uil-arrow', 'nav__icon'),
                        level: 2,
                        path: routes.adminPost,
                    },
                ],
            },
            {
                id: 22,
                title: 'Product',
                classIcon: cx('uil', 'uil-postcard', 'nav__icon'),
                level: 1,
                path: routes.adminPost,
                children: [
                    {
                        id: 221,
                        title: 'Create',
                        classIcon: cx('uil', 'uil-arrow', 'nav__icon'),
                        level: 2,
                        path: routes.adminPost,
                    },
                    {
                        id: 222,
                        title: 'Edit',
                        classIcon: cx('uil', 'uil-arrow', 'nav__icon'),
                        level: 2,
                        path: routes.adminPost,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'Info',
        classIcon: cx('bx', 'bx-face', 'sidebar__icon'),
        level: 0,
        path: routes.userInfo,
    },
    {
        id: 4,
        title: 'Setting',
        classIcon: cx('bx', 'bx-cog', 'sidebar__icon'),
        level: 0,
        path: '/',
    },
];

function Sidebar({ showSidebar }: PropsTypeSidebar) {
    return (
        <div className={cx('sidebar', { 'sidebar--show': showSidebar })}>
            <h3 className={cx('sidebar__title')}>Menu</h3>
            <SidebarMenu items={CONTROL_NAV_LIST}></SidebarMenu>
        </div>
    );
}

export default Sidebar;
