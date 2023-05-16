import classNames from 'classnames/bind';

import styles from './Blog.module.scss';
import CardBlog from '~/components/CardBlog';
import blogTest from '~/assets/billiardcrypto.png';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

const cx = classNames.bind(styles);

interface PropsTypeBlog {}

function Blog({}: PropsTypeBlog) {
    const location = useLocation();
    const [orderPost, setOrderPost] = useState<boolean>(true);

    window.addEventListener('resize', (e) => {
        if (window.innerWidth <= 576) {
            setOrderPost(false);
        }
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (
        <div className={cx('blog', 'section')}>
            <div className={cx('blog__container', 'container')}>
                <CardBlog
                    date="12/12/2012"
                    desc="Tuyệt vời làm sao luôn á"
                    thumbnail={blogTest}
                    title="1 Ngày đẹp trời"
                ></CardBlog>
                <CardBlog
                    order={orderPost}
                    date="12/12/2012"
                    desc="Tuyệt vời làm sao luôn á"
                    thumbnail={blogTest}
                    title="1 Ngày đẹp trời"
                ></CardBlog>
                <CardBlog
                    date="12/12/2012"
                    desc="Tuyệt vời làm sao luôn á "
                    thumbnail={blogTest}
                    title="1 Ngày đẹp trời"
                ></CardBlog>
                <CardBlog
                    order={orderPost}
                    date="12/12/2012"
                    desc="Tuyệt vời làm sao luôn á"
                    thumbnail={blogTest}
                    title="1 Ngày đẹp trời"
                ></CardBlog>
                <CardBlog
                    date="12/12/2012"
                    desc="Tuyệt vời làm sao luôn á"
                    thumbnail={blogTest}
                    title="1 Ngày đẹp trời"
                ></CardBlog>
            </div>
        </div>
    );
}

export default Blog;
