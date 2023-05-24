import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import ControlNav from './ControlNav';

import { ControlNavType } from '~/types/sidebar.type';

const cx = classNames.bind(styles);

interface PropsTypeSidebarMenu {
    showSidebar: boolean;
    items: ControlNavType[];
}

function SidebarMenu({ showSidebar, items }: PropsTypeSidebarMenu) {
    return (
        <div className={cx('sidebar-menu')}>
            {items.map((item) => {
                return (
                    <ControlNav
                        key={item.id}
                        title={item.title}
                        classIcon={item.classIcon}
                        level={item.level}
                        tooltip={!showSidebar ? item.title : undefined}
                        isParent={item.level >= 0 && !!item.children}
                        to={item.path}
                    />
                );
            })}
        </div>
    );
}

export default SidebarMenu;
