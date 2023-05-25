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
        tooltip: 'Back to home',
        classIcon: cx('bx', 'bx-home-alt-2'),
        path: routes.home,
        level: 0,
    },
    {
        id: 2,
        title: 'Admin',
        tooltip: 'Admin',
        classIcon: cx('bx', 'bx-wrench'),
        path: routes.admin,
        level: 0,
    },
    {
        id: 3,
        title: 'Info',
        tooltip: 'Info',
        classIcon: cx('bx', 'bx-face', 'sidebar__icon'),
        level: 0,
        path: routes.userInfo,
    },
    {
        id: 4,
        title: 'Setting',
        tooltip: 'Setting',
        classIcon: cx('bx', 'bx-cog', 'sidebar__icon'),
        level: 0,
        path: routes.setting,
    },
];

function Sidebar({ showSidebar }: PropsTypeSidebar) {
    return (
        <div className={cx('sidebar', { 'sidebar--show': showSidebar })}>
            <h3 className={cx('sidebar__title')}>Menu</h3>
            <SidebarMenu
                showSidebar={showSidebar}
                items={CONTROL_NAV_LIST}
            ></SidebarMenu>
        </div>
    );
}

export default Sidebar;
