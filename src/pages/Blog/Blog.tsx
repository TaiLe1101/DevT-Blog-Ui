import classNames from 'classnames/bind';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import blogTest from '~/assets/billiardcrypto.png';
import CardBlog from '~/components/CardBlog';
import { PostModel } from '~/models';
import { postApi } from '~/api/postApi';
import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

function Blog() {
    const location = useLocation();
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    useEffect(() => {
        postApi.getAll().then((res) => setPosts(res.data));
    }, []);

    return (
        <div className={cx('blog', 'section')}>
            <div className={cx('blog__container', 'container')}>
                {posts.map((post) => {
                    return (
                        <CardBlog
                            key={post.id}
                            date={new Date(post.createdAt).toLocaleDateString(
                                'vi'
                            )}
                            desc={post.title}
                            thumbnail={post.thumbnail || '/images/no-image.jpg'}
                            title={post.title}
                            order={post.id % 2 === 0}
                        ></CardBlog>
                    );
                })}
            </div>
        </div>
    );
}

export default Blog;
