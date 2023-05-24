import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { MouseEventHandler } from 'react';
import { Fragment } from 'react';

import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropsTypeControlNav {
    classIcon: string;
    title: string;
    level: number;
    to: string;
    tooltip: string | undefined;
    isParent?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

function ControlNav({
    classIcon,
    title,
    level,
    tooltip,
    to,
    isParent,
    onClick,
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
                to={to}
            >
                <i className={cx(classIcon, 'sidebar__icon')}></i>
                <span className={cx('sidebar__button-title')}>{title}</span>
                {isParent && (
                    <i
                        className={cx(
                            'bx',
                            'bx-chevron-down',
                            'sidebar__button--dropdown'
                        )}
                    ></i>
                )}
            </NavLink>
        </ToolTip>
    );
}

export default ControlNav;
