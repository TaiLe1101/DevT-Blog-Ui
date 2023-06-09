import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import styles from './CardAdminPost.module.scss';
import avatar from '~/assets/avatar.jpg';
import { PropsTypeCardAdminPost } from '~/types/postAdmin.type';

const cx = classNames.bind(styles);

function CardAdminPost({
    thumbnail,
    title,
    desc,
    onNavigate,
}: PropsTypeCardAdminPost) {
    return (
        <div className={cx('card')}>
            <div className={cx('card__header')}>
                <Link to={'#'}>
                    <img src={thumbnail} alt="" className={cx('card__img')} />
                </Link>
            </div>

            <div className={cx('card__content')}>
                <div className={cx('card__content-header')}>
                    <img
                        src={avatar}
                        alt=""
                        className={cx('card__content-header-img')}
                    />
                    <h3 className={cx('card__content-header-title')}>
                        <Link to={'#'}>{title}</Link>
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
                    <button
                        className={cx(
                            'card__controls-control',
                            'card__controls-control--right'
                        )}
                    >
                        <i
                            className={cx(
                                'uil',
                                'uil-trash-alt',
                                'card__controls-icon'
                            )}
                        ></i>
                    </button>
                </Tippy>
            </div>
        </div>
    );
}

export default CardAdminPost;
