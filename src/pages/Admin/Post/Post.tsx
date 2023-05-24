import classNames from 'classnames/bind';

import styles from './Post.module.scss';
import { Col, Row } from 'antd';
import CardAdminPost from '~/components/CardAdminPost';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Post() {
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <Row gutter={[16, 16]}>
                <Col
                    span={24}
                    lg={{ span: 6 }}
                    md={{ span: 12 }}
                    sm={{ span: 12 }}
                >
                    <CardAdminPost
                        thumbnail="https://devt-blog.onrender.com/uploads/projects/1683914446489-kekho.png"
                        title="Quá đã"
                        desc="Pariatur commodo est fugiat aliqua sint incididunt ullamco."
                        onNavigate={() => navigate(`id`)}
                    />
                </Col>
                <Col
                    span={24}
                    lg={{ span: 6 }}
                    md={{ span: 12 }}
                    sm={{ span: 12 }}
                >
                    <CardAdminPost
                        thumbnail="https://devt-blog.onrender.com/uploads/projects/1683914446489-kekho.png"
                        title="Quá đã"
                        desc="Pariatur commodo est fugiat aliqua sint incididunt ullamco."
                    />
                </Col>
                <Col
                    span={24}
                    lg={{ span: 6 }}
                    md={{ span: 12 }}
                    sm={{ span: 12 }}
                >
                    <CardAdminPost
                        thumbnail="https://devt-blog.onrender.com/uploads/projects/1683914446489-kekho.png"
                        title="Quá đã"
                        desc="Pariatur commodo est fugiat aliqua sint incididunt ullamco."
                    />
                </Col>
                <Col
                    span={24}
                    lg={{ span: 6 }}
                    md={{ span: 12 }}
                    sm={{ span: 12 }}
                >
                    <CardAdminPost
                        thumbnail="https://devt-blog.onrender.com/uploads/projects/1683914446489-kekho.png"
                        title="Quá đã"
                        desc="Pariatur commodo est fugiat aliqua sint incididunt ullamco."
                    />
                </Col>
                <Col
                    span={24}
                    lg={{ span: 6 }}
                    md={{ span: 12 }}
                    sm={{ span: 12 }}
                >
                    <CardAdminPost
                        thumbnail="https://devt-blog.onrender.com/uploads/projects/1683914446489-kekho.png"
                        title="Quá đã"
                        desc="Pariatur commodo est fugiat aliqua sint incididunt ullamco."
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Post;
