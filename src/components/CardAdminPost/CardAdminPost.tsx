import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import ROUTES from '~/configs/route';
import styles from './CardAdminPost.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeCardAdminPost {
    id: number;
    thumbnail: string;
    title: string;
    avatar: string;
    desc?: string;
    deleteLoading?: boolean;
    onDelete?: () => void;
    onNavigate?: () => void;
}

function CardAdminPost({
    thumbnail,
    avatar,
    title,
    desc,
    deleteLoading,
    onDelete,
    onNavigate,
}: PropsTypeCardAdminPost) {
    return (
        <div className={cx('card')}>
            <div className={cx('card__header')}>
                <span style={{ cursor: 'pointer' }} onClick={onNavigate}>
                    <img src={thumbnail} alt="" className={cx('card__img')} />
                </span>
            </div>

            <div className={cx('card__content')}>
                <div className={cx('card__content-header')}>
                    <Link to={ROUTES.USER_INFO}>
                        <img
                            src={avatar || '/images/no-image.jpg'}
                            alt=""
                            className={cx('card__content-header-img')}
                        />
                    </Link>
                    <h3 className={cx('card__content-header-title')}>
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={onNavigate}
                        >
                            {title}
                        </span>
                    </h3>
                </div>
                <p className={cx('card__desc')}>{desc}</p>
            </div>
            <div className={cx('card__controls')}>
                <Tippy content="Edit">
                    <button
                        className={cx(
                            'card__controls-control',
                            'card__controls-control--left'
                        )}
                        onClick={onNavigate}
                    >
                        <i
                            className={cx(
                                'uil',
                                'uil-edit-alt',
                                'card__controls-icon'
                            )}
                        ></i>
                    </button>
                </Tippy>
                <Tippy content="Delete ?">
                    {deleteLoading ? (
                        <span
                            className={cx(
                                'card__controls-control',
                                'card__controls-control--right'
                            )}
                            style={{
                                padding: 0,
                                height: '100%',
                                lineHeight: '47px',
                            }}
                        >
                            Loading...
                        </span>
                    ) : (
                        <button
                            className={cx(
                                'card__controls-control',
                                'card__controls-control--right'
                            )}
                            onClick={onDelete}
                        >
                            <i
                                className={cx(
                                    'uil',
                                    'uil-trash-alt',
                                    'card__controls-icon'
                                )}
                            ></i>
                        </button>
                    )}
                </Tippy>
            </div>
        </div>
    );
}

export default CardAdminPost;
