import classNames from 'classnames/bind';

import styles from './UserInfoItem.module.scss';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropsTypeUserInfoItem {
    text: string;
    classIcon?: string;
    order?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string;
}

function UserInfoItem({
    text,
    classIcon,
    order,
    href,
    onClick,
}: PropsTypeUserInfoItem) {
    let Comp: any = 'button';

    if (href) {
        Comp = Link;
    }
    return (
        <div
            className={cx('user-info-item', {
                'user-info-item--order': order,
            })}
        >
            <Comp
                to={href}
                className={cx('user-info-item__button')}
                onClick={onClick}
            >
                {classIcon && (
                    <i className={cx(classIcon, 'user-info-item__icon')}></i>
                )}
                <span>{text}</span>
            </Comp>
        </div>
    );
}

export default UserInfoItem;
