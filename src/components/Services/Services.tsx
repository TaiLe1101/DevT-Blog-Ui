import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Services.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function Services() {
    const [showModal, setShowModal] = useState<number>(0);

    const handleShowModal = (index: number) => {
        setShowModal(index);
    };

    const handleCloseModal = () => {
        setShowModal(0);
    };

    return (
        <div className={`${cx('services')} ${cxm('section')}`} id="services">
            <h2 className={`${cxm('section__title')}`}>Dịch vụ</h2>
            <span className={`${cxm('section__subtitle')}`}>Bạn sẽ được</span>

            <div
                className={`${cx('services__container')} ${cxm(
                    'container',
                    'grid'
                )}`}
            >
                <div className={cx('services__content')}>
                    <div>
                        <i
                            className={`uil uil-web-grid ${cx(
                                'services__icon'
                            )}`}
                        ></i>
                        <h3 className={cx('services__title')}>
                            Frontend <br /> Development
                        </h3>
                    </div>

                    <span
                        className={cx('services__button')}
                        onClick={() => {
                            handleShowModal(1);
                        }}
                    >
                        Xem chi tiết
                        <i
                            className={`uil uil-arrow-right ${cx(
                                'services__button-icon'
                            )}`}
                        ></i>
                    </span>

                    <div
                        className={cx('services__modal', {
                            'active-modal': showModal === 1 ? true : false,
                        })}
                    >
                        <div className={cx('services__modal-content')}>
                            <i
                                className={`uil uil-times ${cx(
                                    'services__modal-close'
                                )}`}
                                onClick={handleCloseModal}
                            ></i>
                            <h3 className={cx('services__modal-title')}>
                                Các ưu đãi
                            </h3>
                            <p className={cx('services__modal-description')}>
                                Phục vụ tận tâm, làm việc thoải mái,giá cả phải
                                chăng
                            </p>

                            <ul
                                className={`${cx(
                                    'services__modal-services'
                                )} ${cxm('grid')}`}
                            >
                                <li className={cx('services__modal-service')}>
                                    <i
                                        className={`uil uil-check-circle ${cx(
                                            'services__modal-icon'
                                        )}`}
                                    ></i>
                                    <p className={cx('services__modal-info')}>
                                        Thiết kế website theo yêu cầu
                                    </p>
                                </li>

                                <li className={cx('services__modal-service')}>
                                    <i
                                        className={`uil uil-check-circle ${cx(
                                            'services__modal-icon'
                                        )}`}
                                    ></i>
                                    <p className={cx('services__modal-info')}>
                                        Xây dụng website theo yêu cầu
                                    </p>
                                </li>

                                <li className={cx('services__modal-service')}>
                                    <i
                                        className={`uil uil-check-circle ${cx(
                                            'services__modal-icon'
                                        )}`}
                                    ></i>
                                    <p className={cx('services__modal-info')}>
                                        Hoàn trả 100% tiền nếu không hoàn thành
                                        dự án
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('services__content')}>
                    <div>
                        <i
                            className={`uil uil-servers ${cx(
                                'services__icon'
                            )}`}
                        ></i>
                        <h3 className={cx('services__title')}>
                            Backend <br /> Development
                        </h3>
                    </div>

                    <span
                        className={cx('services__button')}
                        onClick={() => handleShowModal(2)}
                    >
                        Xem chi tiết
                        <i
                            className={`uil uil-arrow-right ${cx(
                                'services__button-icon'
                            )}`}
                        ></i>
                    </span>

                    <div
                        className={cx('services__modal', {
                            'active-modal': showModal === 2 ? true : false,
                        })}
                    >
                        <div className={cx('services__modal-content')}>
                            <i
                                className={`uil uil-times ${cx(
                                    'services__modal-close'
                                )}`}
                                onClick={handleCloseModal}
                            ></i>
                            <h3 className={cx('services__modal-title')}>
                                Các ưu đãi
                            </h3>
                            <p className={cx('services__modal-description')}>
                                Phục vụ tận tâm, làm việc thoải mái,giá cả phải
                                chăng
                            </p>

                            <ul
                                className={`${cx(
                                    'services__modal-services'
                                )} ${cxm('grid')}`}
                            >
                                <li className={cx('services__modal-service')}>
                                    <i
                                        className={`uil uil-check-circle ${cx(
                                            'services__modal-icon'
                                        )}`}
                                    ></i>
                                    <p className={cx('services__modal-info')}>
                                        Phát triển chức năng theo yêu cầu
                                    </p>
                                </li>

                                <li className={cx('services__modal-service')}>
                                    <i
                                        className={`uil uil-check-circle ${cx(
                                            'services__modal-icon'
                                        )}`}
                                    ></i>
                                    <p className={cx('services__modal-info')}>
                                        Phân tích và đưa ra chức năng hợp lý cho
                                        sản phẩm
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('services__content')}>
                    <div>
                        <i
                            className={`uil uil-palette ${cx(
                                'services__icon'
                            )}`}
                        ></i>
                        <h3 className={cx('services__title')}>
                            Design <br /> UX/UI
                        </h3>
                    </div>

                    <span
                        className={cx('services__button')}
                        onClick={() => handleShowModal(3)}
                    >
                        Xem chi tiết
                        <i
                            className={`uil uil-arrow-right ${cx(
                                'services__button-icon'
                            )}`}
                        ></i>
                    </span>

                    <div
                        className={cx('services__modal', {
                            'active-modal': showModal === 3 ? true : false,
                        })}
                    >
                        <div className={cx('services__modal-content')}>
                            <i
                                className={`uil uil-times ${cx(
                                    'services__modal-close'
                                )}`}
                                onClick={handleCloseModal}
                            ></i>
                            <h3 className={cx('services__modal-title')}>
                                Các ưu đãi
                            </h3>
                            <p className={cx('services__modal-description')}>
                                Phục vụ tận tâm, làm việc thoải mái,giá cả phải
                                chăng
                            </p>

                            <ul
                                className={`${cx(
                                    'services__modal-services'
                                )} ${cxm('grid')}`}
                            >
                                <li className={cx('services__modal-service')}>
                                    <i
                                        className={`uil uil-check-circle ${cx(
                                            'services__modal-icon'
                                        )}`}
                                    ></i>
                                    <p className={cx('services__modal-info')}>
                                        Xây dựng và thiết kế website chuẩn UX
                                    </p>
                                </li>

                                <li className={cx('services__modal-service')}>
                                    <i
                                        className={`uil uil-check-circle ${cx(
                                            'services__modal-icon'
                                        )}`}
                                    ></i>
                                    <p className={cx('services__modal-info')}>
                                        UI hợp với thời đại phát triển công nghệ
                                    </p>
                                </li>

                                <li className={cx('services__modal-service')}>
                                    <i
                                        className={`uil uil-check-circle ${cx(
                                            'services__modal-icon'
                                        )}`}
                                    ></i>
                                    <p className={cx('services__modal-info')}>
                                        Kết hợp Responsive tăng trả nghiệm người
                                        dùng ở mọi thiết bị
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
