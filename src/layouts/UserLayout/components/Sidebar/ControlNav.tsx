import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { MouseEventHandler } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeControlNav {
    classIcon: string;
    title: string;
    isActive?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

function ControlNav({
    classIcon,
    title,
    isActive,
    onClick,
}: PropsTypeControlNav) {
    const classes = cx(classIcon, 'sidebar__icon');
    return (
        <div
            className={cx('sidebar__button', {
                'sidebar__button--active': isActive,
            })}
            onClick={onClick}
        >
            <i className={classes}></i>
            <span>{title}</span>
        </div>
    );
}

export default ControlNav;
