import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import { PropsTypeControlNav } from '~/types/sidebar.type';

const cx = classNames.bind(styles);

function ControlNav({
    classIcon,
    title,
    level,
    tooltip,
    path,
}: PropsTypeControlNav) {
    let optionsTippy = {};
    let ToolTip: any = Fragment;

    if (tooltip) {
        ToolTip = Tippy;
        optionsTippy = {
            content: tooltip,
            placement: 'right',
        };
    }

    return (
        <ToolTip {...optionsTippy}>
            <NavLink
                className={(nav) => {
                    return cx('sidebar__button', {
                        'sidebar__button--active': nav.isActive,
                        'sidebar__button--children': level > 0,
                    });
                }}
                to={path}
            >
                <i className={cx(classIcon, 'sidebar__icon')}></i>
                <span className={cx('sidebar__button-title')}>{title}</span>
            </NavLink>
        </ToolTip>
    );
}

export default ControlNav;
