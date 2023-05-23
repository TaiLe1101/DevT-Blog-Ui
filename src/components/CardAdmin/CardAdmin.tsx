import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardAdmin.module.scss';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeCardAdmin {
    title: string;
    icon: ReactNode;
    path: string;
    backgroundColor?: string;
    color?: string;
}

function CardAdmin({
    icon,
    path,
    title,
    backgroundColor,
    color,
}: PropsTypeCardAdmin) {
    return (
        <div style={{ backgroundColor, color }} className={cx('admin-card')}>
            <div className={cx('admin-card-top')}>
                <h3 style={{ color }} className={cx('admin-card-top__title')}>
                    {title}
                </h3>
                {icon}
            </div>
            <div className={cx('admin-card-bot')}>
                <Link
                    style={{ color }}
                    to={path}
                    className={cx('admin-card-bot__link')}
                >
                    <span style={{ color }}>Xem chi tiết</span>
                    <i
                        className={cx(
                            'uil',
                            'uil-arrow-right',
                            'admin-card-bot__link-icon'
                        )}
                    ></i>
                </Link>
            </div>
        </div>
    );
}

export default CardAdmin;
