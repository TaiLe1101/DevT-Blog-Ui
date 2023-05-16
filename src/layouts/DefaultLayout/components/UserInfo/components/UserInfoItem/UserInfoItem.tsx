import classNames from 'classnames/bind';

import styles from './UserInfoItem.module.scss';
import { MouseEventHandler } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeUserInfoItem {
    text: string;
    classIcon?: string;
    order?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

function UserInfoItem({
    text,
    classIcon,
    order,
    onClick,
}: PropsTypeUserInfoItem) {
    return (
        <div
            className={cx('user-info-item', { 'user-info-item--order': order })}
        >
            <button className={cx('user-info-item__button')} onClick={onClick}>
                {classIcon && (
                    <i className={cx(classIcon, 'user-info-item__icon')}></i>
                )}
                <span>{text}</span>
            </button>
        </div>
    );
}

export default UserInfoItem;
