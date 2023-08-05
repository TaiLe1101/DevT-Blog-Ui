import classNames from 'classnames/bind';

import styles from './CardBlog.module.scss';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeCardBlog {
    thumbnail: string;
    title: string;
    date: string;
    desc: string;
    order?: boolean;
}

function CardBlog({ thumbnail, title, date, desc, order }: PropsTypeCardBlog) {
    const [orderPost, setOrderPost] = useState<boolean>(order ? false : true);

    window.addEventListener('resize', (e) => {
        if (window.innerWidth <= 576) {
            setOrderPost(false);
        }
    });

    return (
        <div className={cx('card-blog', { 'card-blog-oder': orderPost })}>
            <Link to={'#'} className={cx('card-blog__link-img')}>
                <img
                    className={cx('card-blog__img')}
                    src={thumbnail}
                    alt={`Ảnh cho blog ${title}`}
                />
            </Link>
            <div className={cx('card-blog__content')}>
                <div className={cx('card-blog__header')}>
                    <h3 className={cx('card-blog__title')}>
                        <Link to="#" className={cx('card-blog__link')}>
                            {title}
                        </Link>
                    </h3>
                </div>

                <p className={cx('card-blog__desc')}>{desc}</p>

                <div className={cx('card-blog__footer')}>
                    <Button
                        text="See Detail"
                        icon={<i className="bx bx-right-arrow-alt"></i>}
                    ></Button>
                    <p className={cx('card-blog__date')}>
                        <i className="bx bx-calendar"></i>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardBlog;
