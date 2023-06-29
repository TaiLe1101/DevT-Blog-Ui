import { Col, Row } from 'antd';
import classNames from 'classnames/bind';

import styles from './Admin.module.scss';
import routes from '~/configs/route';
import CardAdmin from '~/components/CardAdmin';

const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('admin')}>
            <div className={cx('admin-cards')}>
                <Row gutter={[16, 16]}>
                    <Col span={24} lg={{ span: 8 }}>
                        <CardAdmin
                            backgroundColor="#ECF8F9"
                            icon={
                                <i
                                    className={cx(
                                        'uil',
                                        'uil-web-grid',
                                        'admin-card-top__icon'
                                    )}
                                ></i>
                            }
                            path={routes.adminPost}
                            title="Post"
                        ></CardAdmin>
                    </Col>
                    <Col span={24} lg={{ span: 8 }}>
                        <CardAdmin
                            backgroundColor="#F9F5F6"
                            path={routes.adminProject}
                            title="Project"
                            icon={
                                <i
                                    className={cx(
                                        'uil',
                                        'uil-web-grid',
                                        'admin-card-top__icon'
                                    )}
                                ></i>
                            }
                        ></CardAdmin>
                    </Col>
                    <Col span={24} lg={{ span: 8 }}>
                        <CardAdmin
                            backgroundColor="#C4DFDF"
                            path="#"
                            title="Email"
                            icon={
                                <i
                                    className={cx(
                                        'uil',
                                        'uil-web-grid',
                                        'admin-card-top__icon'
                                    )}
                                ></i>
                            }
                        ></CardAdmin>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Admin;
