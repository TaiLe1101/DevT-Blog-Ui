import { Col, Row } from 'antd';
import classNames from 'classnames/bind';

import styles from './Admin.module.scss';
import { Link } from 'react-router-dom';
import routes from '~/configs/route';

const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('admin')}>
            <Row gutter={[16, 16]}>
                <Col span={24} lg={{ span: 8 }}>
                    <div className={cx('admin-card')}>
                        <div className={cx('admin-card-top')}>
                            <h3 className={cx('admin-card-top__title')}>
                                Post
                            </h3>
                            <i
                                className={cx(
                                    'uil',
                                    'uil-web-grid',
                                    'admin-card-top__icon'
                                )}
                            ></i>
                        </div>
                        <div className={cx('admin-card-bot')}>
                            <Link
                                to={routes.adminPost}
                                className={cx('admin-card-bot__link')}
                            >
                                <span>Xem chi tiết</span>
                                <i
                                    className={cx(
                                        'uil',
                                        'uil-arrow-right',
                                        'admin-card-bot__link-icon'
                                    )}
                                ></i>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col span={24} lg={{ span: 8 }}>
                    <div className={cx('admin-card')}>
                        <div className={cx('admin-card-top')}>
                            <h3 className={cx('admin-card-top__title')}>
                                Project
                            </h3>
                            <i
                                className={cx(
                                    'uil',
                                    'uil-web-grid',
                                    'admin-card-top__icon'
                                )}
                            ></i>
                        </div>
                        <div className={cx('admin-card-bot')}>
                            <Link
                                to={'#'}
                                className={cx('admin-card-bot__link')}
                            >
                                <span>Xem chi tiết</span>
                                <i
                                    className={cx(
                                        'uil',
                                        'uil-arrow-right',
                                        'admin-card-bot__link-icon'
                                    )}
                                ></i>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col span={24} lg={{ span: 8 }}>
                    <div className={cx('admin-card')}>
                        <div className={cx('admin-card-top')}>
                            <h3 className={cx('admin-card-top__title')}>
                                Email
                            </h3>
                            <i
                                className={cx(
                                    'uil',
                                    'uil-web-grid',
                                    'admin-card-top__icon'
                                )}
                            ></i>
                        </div>
                        <div className={cx('admin-card-bot')}>
                            <Link
                                to={'#'}
                                className={cx('admin-card-bot__link')}
                            >
                                <span>Xem chi tiết</span>
                                <i
                                    className={cx(
                                        'uil',
                                        'uil-arrow-right',
                                        'admin-card-bot__link-icon'
                                    )}
                                ></i>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Admin;
