import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'antd';

import styles from './PostControl.module.scss';
import { ParamsPostAdminType } from '~/types/postAdmin.type';
const cx = classNames.bind(styles);

function PostEdit() {
    const params = useParams<ParamsPostAdminType>();
    return (
        <div className={cx('post-edit')}>
            <Row gutter={[16, 16]}>
                <Col span={24} lg={{ span: 12 }}>
                    <div className={cx('post-edit__text-editor')}>
                        <div className={cx('post-edit__controls')}></div>
                    </div>
                </Col>
                <Col span={24} lg={{ span: 12 }}></Col>
            </Row>
        </div>
    );
}

export default PostEdit;
