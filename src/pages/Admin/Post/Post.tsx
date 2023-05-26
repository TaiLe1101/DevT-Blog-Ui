import classNames from 'classnames/bind';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import CardAdminPost from '~/components/CardAdminPost';
import styles from './Post.module.scss';
import { CardAdminPostType } from '~/types/postAdmin.type';
import Button from '~/components/Button';
import routes from '~/configs/route';

const cx = classNames.bind(styles);

const CARD_ADMIN_POST_LIST: CardAdminPostType[] = [
    {
        id: 1,
        title: 'Post1',
        thumbnail:
            'https://devt-blog.onrender.com/uploads/projects/1683914446489-kekho.png',
        desc: 'Et fugiat consequat cupidatat amet nisi in quis consectetur amet ea eu.',
    },
    {
        id: 2,
        title: 'Post2',
        thumbnail:
            'https://devt-blog.onrender.com/uploads/projects/1683914446489-kekho.png',
        desc: 'Et fugiat consequat cupidatat amet nisi in quis consectetur amet ea eu.',
    },
    {
        id: 3,
        title: 'Post3',
        thumbnail:
            'https://devt-blog.onrender.com/uploads/projects/1683914446489-kekho.png',
        desc: 'Et fugiat consequat cupidatat amet nisi in quis consectetur amet ea eu.',
    },
    {
        id: 4,
        title: 'Post4',
        thumbnail:
            'https://devt-blog.onrender.com/uploads/projects/1683914446489-kekho.png',
        desc: 'Et fugiat consequat cupidatat amet nisi in quis consectetur amet ea eu.',
    },
];

function Post() {
    const navigate = useNavigate();
    const handleChangeNav = (id: number) => {
        navigate(`edit/${id}`, {
            state: {
                id,
            },
        });
    };
    return (
        <div className={cx('post')}>
            <div className={cx('post__controls')}>
                <Button
                    backColor="#06b6d4"
                    href={routes.adminPostCreate}
                    text="Tạo mới"
                    icon={<i className={cx('uil', 'uil-plus')}></i>}
                ></Button>
            </div>

            <Row gutter={[16, 16]}>
                {CARD_ADMIN_POST_LIST.map((card) => (
                    <Col
                        key={card.id}
                        span={24}
                        lg={{ span: 6 }}
                        md={{ span: 12 }}
                        sm={{ span: 12 }}
                    >
                        <CardAdminPost
                            {...card}
                            onNavigate={() => handleChangeNav(card.id)}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Post;
