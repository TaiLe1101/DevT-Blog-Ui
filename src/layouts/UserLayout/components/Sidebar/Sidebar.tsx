import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import ControlNav from './ControlNav';
import { useDispatch, useSelector } from 'react-redux';
import routes from '~/configs/route';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RootState } from '~/redux/store';
import { changeNav } from './SidebarSlice';

const cx = classNames.bind(styles);

interface PropsTypeSidebar {
    showSidebar: boolean;
}

interface ControlNavType {
    id: number;
    title: string;
    classIcon: string;
    path: string;
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
    const pageActive = useSelector((state: RootState) => state.sidebar.id);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleActiveNav = (id: number, path: string) => {
        dispatch(changeNav({ id }));
        navigate(path);
    };

    return (
        <div className={cx('sidebar', { 'sidebar--show': showSidebar })}>
            <h3 className={cx('sidebar__title')}>Menu</h3>
            {CONTROL_NAV_LIST.map((nav) => {
                return (
                    <ControlNav
                        key={nav.id}
                        isActive={pageActive === nav.id}
                        title={nav.title}
                        classIcon={nav.classIcon}
                        onClick={() => {
                            handleActiveNav(nav.id, nav.path);
                        }}
                    ></ControlNav>
                );
            })}
        </div>
    );
}

export default Sidebar;
