import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import styles from './Testimonial.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

import './CustomSwiper.scss';

import { Customers } from './Data';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function Testimonial() {
    return (
        <div
            className={`testimonial-component ${cx('testimonial')} ${cxm(
                'section',
                'container'
            )}`}
            id="testimonial"
        >
            <h2 className={`${cxm('section__title')}`}>
                Nhận xét của khách hàng
            </h2>
            <span className={`${cxm('section__subtitle')}`}>
                Tất cả nhận xét
            </span>

            <Swiper
                className={`${cx('testimonial__container')}`}
                loop
                grabCursor
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                }}
                modules={[Pagination, Autoplay]}
            >
                {Customers.map(({ id, name, avatar, comment }) => {
                    return (
                        <SwiperSlide key={id}>
                            <div className={cx('testimonial__card')}>
                                <img
                                    src={avatar}
                                    alt={'Ảnh đại diện ' + name}
                                    className={cx('testimonial__img')}
                                />

                                <h3 className={cx('testimonial__name')}>
                                    {name}
                                </h3>
                                <p className={cx('testimonial__description')}>
                                    {comment}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Testimonial;
