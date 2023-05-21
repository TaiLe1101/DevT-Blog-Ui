import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import ControlNav from './ControlNav';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { useNavigate } from 'react-router-dom';
import { changeNav } from './SidebarSlice';
import { ControlNavType } from '~/types/sidebar.type';

const cx = classNames.bind(styles);

interface PropsTypeSidebarMenu {
    items: ControlNavType[];
}

function SidebarMenu({ items }: PropsTypeSidebarMenu) {
    const pageActive = useSelector((state: RootState) => state.sidebar.id);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleActiveNav = (id: number, path: string) => {
        dispatch(changeNav({ id }));
        navigate(path);
    };

    return (
        <div className={cx('sidebar-menu')}>
            {items.map((item) => (
                <ControlNav
                    key={item.id}
                    isActive={pageActive === item.id}
                    title={item.title}
                    classIcon={item.classIcon}
                    onClick={() => {
                        handleActiveNav(item.id, item.path);
                    }}
                />
            ))}
        </div>
    );
}

export default SidebarMenu;
