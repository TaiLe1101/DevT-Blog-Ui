import { useState } from 'react';
import classNames from 'classnames/bind';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles from './Contact.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';
import { useRef } from 'react';
import Button from '../Button/Button';

const MySwal = withReactContent(Swal);

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [dataForm, setDataForm] = useState<{
        name: string;
        email: string;
        project: string;
    }>({ name: '', email: '', project: '' });

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const current = form.current as HTMLFormElement;
        if (
            dataForm.name &&
            dataForm.email &&
            dataForm.project &&
            dataForm.email.includes('@')
        ) {
            MySwal.fire({
                title: 'Đang gửi',
                didOpen: () => {
                    MySwal.showLoading();
                    emailjs
                        .sendForm(
                            'service_0qxoex9',
                            'template_mwjx2aa',
                            current,
                            'T4RgxTNw6CUz_UxC-'
                        )
                        .then((result) => {
                            MySwal.hideLoading();
                            MySwal.fire({
                                icon: 'success',
                                title: 'Thành công',
                                text: 'Cảm ơn bạn, chúng tôi sẽ trả lời bạn trong thời gian sớm nhất!',
                            });
                        })
                        .catch(() => {
                            MySwal.hideLoading();
                            MySwal.fire({
                                icon: 'error',
                                title: 'Thất bại',
                                text: 'Xin lỗi, dường như có một số lỗi khuyến bạn không thể gửi thông tin cho chúng tôi',
                            });
                        })
                        .finally(() => {
                            setDataForm({
                                name: '',
                                email: '',
                                project: '',
                            });
                            form.current?.reset();
                        });
                },
            });
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Vui lòng nhập đủ và đúng thông tin',
            });
        }
    };

    return (
        <div className={`${cx('contact')} ${cxm('section')}`} id="contact">
            <h2 className={`${cxm('section__title')}`}>Liên lạc</h2>
            <span className={`${cxm('section__subtitle')}`}>
                Liên hệ đặt hàng với tôi
            </span>

            <div
                className={`${cx('contact__container')} ${cxm(
                    'container',
                    'grid'
                )}`}
            >
                <div className={cx('contact__content')}>
                    <h3 className={cx('contact__title')}>
                        Phương thức liên hệ
                    </h3>

                    <div className={cx('contact__info')}>
                        <div className={cx('contact__card')}>
                            <i
                                className={`bx bx-mail-send ${cx(
                                    'contact__card-icon'
                                )}`}
                            ></i>

                            <h3 className={cx('contact__card-title')}>Email</h3>
                            <span className={cx('contact__card-data')}>
                                taic21a.th1@gmail.com
                            </span>

                            <a
                                href="mailto:taic21a.th1@gmail.com"
                                className={cx('contact__button')}
                            >
                                Write me
                                <i
                                    className={`bx bx-right-arrow-alt ${cx(
                                        'contact__button-icon'
                                    )}`}
                                ></i>
                            </a>
                        </div>

                        <div className={cx('contact__card')}>
                            <i
                                className={`bx bx-phone-incoming ${cx(
                                    'contact__card-icon'
                                )}`}
                            ></i>

                            <h3 className={cx('contact__card-title')}>
                                Phone Number
                            </h3>
                            <span className={cx('contact__card-data')}>
                                +84 865-850-073
                            </span>

                            <a
                                href="tel:0865850073"
                                className={cx('contact__button')}
                            >
                                Write me
                                <i
                                    className={`bx bx-right-arrow-alt ${cx(
                                        'contact__button-icon'
                                    )}`}
                                ></i>
                            </a>
                        </div>

                        <div className={cx('contact__card')}>
                            <i
                                className={`bx bxl-messenger ${cx(
                                    'contact__card-icon'
                                )}`}
                            ></i>

                            <h3 className={cx('contact__card-title')}>
                                Messenger
                            </h3>
                            <span className={cx('contact__card-data')}>
                                TaiLe1101
                            </span>

                            <a
                                href="https://www.messenger.com/t/100011703460148"
                                target="_blank"
                                className={cx('contact__button')}
                                rel="noreferrer"
                            >
                                Write me
                                <i
                                    className={`bx bx-right-arrow-alt ${cx(
                                        'contact__button-icon'
                                    )}`}
                                ></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('contact__content')}>
                    <h3 className={cx('contact__title')}>
                        Mô tả dự án của bạn
                    </h3>

                    <form
                        onSubmit={sendEmail}
                        ref={form}
                        className={cx('contact__form')}
                    >
                        <div className={cx('contact__form-div')}>
                            <label className={cx('contact__form-tag')}>
                                Họ và Tên
                            </label>
                            <input
                                type="text"
                                name="name"
                                className={cx('contact__form-input')}
                                placeholder="Họ và tên của bạn..."
                                onChange={(e) =>
                                    setDataForm((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                        </div>

                        <div className={cx('contact__form-div')}>
                            <label className={cx('contact__form-tag')}>
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                className={cx('contact__form-input')}
                                placeholder="customer@gmail.com"
                                onChange={(e) =>
                                    setDataForm((prev) => ({
                                        ...prev,
                                        email: e.target.value,
                                    }))
                                }
                            />
                        </div>

                        <div
                            className={cx(
                                'contact__form-div',
                                'contact__form-area'
                            )}
                        >
                            <label className={cx('contact__form-tag')}>
                                Mô tả về dự án
                            </label>
                            <textarea
                                name="project"
                                cols={30}
                                rows={10}
                                className={cx('contact__form-input')}
                                placeholder="Mô tả về dự án của bạn..."
                                onChange={(e) =>
                                    setDataForm((prev) => ({
                                        ...prev,
                                        project: e.target.value,
                                    }))
                                }
                            ></textarea>
                        </div>

                        <Button
                            text="Gửi yêu cầu"
                            icon={
                                <i
                                    className={`bx bx-send ${cx(
                                        'contact__button-send-icon'
                                    )}`}
                                ></i>
                            }
                            className={cx('contact__button-send')}
                        ></Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
