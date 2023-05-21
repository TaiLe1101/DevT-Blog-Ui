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
    },
    {
        id: 2,
        title: 'Admin',
        classIcon: cx('bx', 'bx-wrench'),
        path: routes.admin,
    },
    {
        id: 3,
        title: 'Info',
        classIcon: cx('bx', 'bx-face', 'sidebar__icon'),
        path: routes.userInfo,
    },
    {
        id: 4,
        title: 'Setting',
        classIcon: cx('bx', 'bx-cog', 'sidebar__icon'),
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
