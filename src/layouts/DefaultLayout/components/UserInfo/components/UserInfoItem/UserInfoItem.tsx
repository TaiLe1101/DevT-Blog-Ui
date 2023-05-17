import classNames from 'classnames/bind';

import styles from './UserInfoItem.module.scss';
import { Link } from 'react-router-dom';
import { PropsTypeUserInfoItem } from '~/types/prop.type';

const cx = classNames.bind(styles);

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
