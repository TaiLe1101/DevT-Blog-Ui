import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import ControlNav from './ControlNav';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { useNavigate } from 'react-router-dom';
import { changeNav } from './SidebarSlice';
import { ControlNavType } from '~/types/sidebar.type';
import { Fragment, useState } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeSidebarMenu {
    items: ControlNavType[];
}

function SidebarMenu({ items }: PropsTypeSidebarMenu) {
    const pageActive = useSelector((state: RootState) => state.sidebar.id);

    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [activeNav, setActiveNav] = useState<number>(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleActiveNav = (id: number, path: string) => {
        dispatch(changeNav({ id }));
        navigate(path);
    };

    return (
        <div className={cx('sidebar-menu')}>
            {items.map((item) => {
                return (
                    <Fragment key={item.id}>
                        <ControlNav
                            isActive={pageActive === item.id}
                            title={item.title}
                            classIcon={item.classIcon}
                            level={item.level}
                            isParent={item.level >= 0 && !!item.children}
                            onClick={() => {
                                handleActiveNav(item.id, item.path);
                                setActiveNav(item.id);

                                if (item.children && item.id === activeNav) {
                                    setToggleMenu((prev) => !prev);
                                }
                            }}
                        />
                        {item.id === activeNav &&
                            toggleMenu &&
                            item.children && (
                                <SidebarMenu
                                    items={item.children}
                                ></SidebarMenu>
                            )}
                    </Fragment>
                );
            })}
        </div>
    );
}

export default SidebarMenu;
