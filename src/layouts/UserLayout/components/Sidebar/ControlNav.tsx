import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { MouseEventHandler } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeControlNav {
    classIcon: string;
    title: string;
    level: number;
    isActive?: boolean;
    isParent?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

function ControlNav({
    classIcon,
    title,
    level,
    isActive,
    isParent,
    onClick,
}: PropsTypeControlNav) {
    const classes = cx(classIcon, 'sidebar__icon');

    const handleWidthChildren = (): number => {
        const width = 95 - level * 10;
        return width;
    };

    return (
        <div
            style={{ width: `${handleWidthChildren()}%` }}
            className={cx('sidebar__button', {
                'sidebar__button--active': isActive,
                'sidebar__button--children': level > 0,
            })}
            onClick={onClick}
        >
            <i className={classes}></i>
            <span>{title}</span>
            {isParent && (
                <i
                    className={cx(
                        'bx',
                        'bx-chevron-down',
                        'sidebar__button--dropdown'
                    )}
                ></i>
            )}
        </div>
    );
}

export default ControlNav;
