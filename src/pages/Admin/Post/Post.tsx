import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import Button from '~/components/Button';
import CardAdminPost from '~/components/CardAdminPost';
import ROUTES from '~/configs/route';
import { postActions } from '~/redux/features/post';
import { useAppDispatch, useAppSelector } from '~/hooks';
import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post() {
    const { posts, isLoading } = useAppSelector((state) => state.post);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postActions.getPosts());
    }, [dispatch]);

    const navigate = useNavigate();
    const handleChangeNav = (id: number) => {
        navigate(`/admin/post/edit/${id}`, {
            state: {
                id,
            },
        });
    };

    const handleDeletePost = async (id: number) => {
        dispatch(postActions.deletePost({ id }));
    };
    return (
        <div className={cx('post')}>
            <div className={cx('post__controls')}>
                <Button
                    backColor="#06b6d4"
                    href={ROUTES.ADMIN_POST_CREATE}
                    text="Tạo mới"
                    icon={<i className={cx('uil', 'uil-plus')}></i>}
                ></Button>
            </div>

            <Row gutter={[16, 16]}>
                {posts ? (
                    posts.map((item) => (
                        <Col
                            key={item.id}
                            span={24}
                            lg={{ span: 6 }}
                            md={{ span: 12 }}
                            sm={{ span: 12 }}
                        >
                            <CardAdminPost
                                id={item.id}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                desc={item.desc}
                                avatar={item.user.avatar}
                                onNavigate={() => handleChangeNav(item.id)}
                                onDelete={() => handleDeletePost(item.id)}
                                deleteLoading={isLoading}
                            />
                        </Col>
                    ))
                ) : (
                    <></>
                )}
            </Row>
        </div>
    );
}

export default Post;
