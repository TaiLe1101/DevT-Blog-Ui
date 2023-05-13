import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Qualification.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

interface PropsTypeQualification {}

function Qualification({}: PropsTypeQualification) {
    const [nav, setNav] = useState<number>(1);

    return (
        <div className={`${cx('qualification')} ${cxm('section')}`}>
            <h2 className={`${cxm('section__title')}`}>Qualification</h2>
            <span className={`${cxm('section__subtitle')}`}>What is offer</span>

            <div
                className={`${cx('qualification__container')} ${cxm(
                    'container',
                    'grid'
                )}`}
            >
                <div className={cx('qualification__tabs')}>
                    <div
                        className={`${cx('qualification__button', {
                            qualification__active: nav === 1,
                        })} ${cxm('button--flex')}`}
                        onClick={() => setNav(1)}
                    >
                        <i
                            className={`uil uil-graduation-cap ${cx(
                                'qualification__icon'
                            )}`}
                        ></i>
                        Education
                    </div>

                    <div
                        className={`${cx('qualification__button', {
                            qualification__active: nav === 2,
                        })} ${cxm('button--flex')}`}
                        onClick={() => setNav(2)}
                    >
                        <i
                            className={`uil uil-briefcase-alt ${cx(
                                'qualification__icon'
                            )}`}
                        ></i>
                        Experience
                    </div>
                </div>

                <div className={cx('qualification__sections')}>
                    <div
                        className={cx('qualification__content', {
                            'qualification__content-active':
                                nav === 1 ? true : false,
                        })}
                    >
                        <div className={cx('qualification__data')}>
                            <div>
                                <h3 className={cx('qualification__title')}>
                                    Hoa Yêu Thương
                                </h3>
                                <span className={cx('qualification__subtitle')}>
                                    Bán hoa online
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className="uil uil-calendar-alt"></i>
                                    02/2023 - 03/2023
                                </div>
                            </div>

                            <div>
                                <span
                                    className={cx('qualification__rounder')}
                                ></span>
                                <span
                                    className={cx('qualification__line')}
                                ></span>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div></div>

                            <div>
                                <span
                                    className={cx('qualification__rounder')}
                                ></span>
                                <span
                                    className={cx('qualification__line')}
                                ></span>
                            </div>

                            <div>
                                <h3 className={cx('qualification__title')}>
                                    Shoppe
                                </h3>
                                <span className={cx('qualification__subtitle')}>
                                    Shoppe - Clone UI
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className="uil uil-calendar-alt"></i>
                                    08/2021 - 09/2021
                                </div>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div>
                                <h3 className={cx('qualification__title')}>
                                    TikTok
                                </h3>
                                <span className={cx('qualification__subtitle')}>
                                    TikTok - User Interface
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className="uil uil-calendar-alt"></i>
                                    09/2022 - 10/2022
                                </div>
                            </div>
                            <div>
                                <span
                                    className={cx('qualification__rounder')}
                                ></span>
                                <span
                                    className={cx('qualification__line')}
                                ></span>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div></div>

                            <div>
                                <span
                                    className={cx('qualification__rounder')}
                                ></span>
                                <span
                                    className={cx('qualification__line')}
                                ></span>
                            </div>

                            <div>
                                <h3 className={cx('qualification__title')}>
                                    The Band
                                </h3>
                                <span className={cx('qualification__subtitle')}>
                                    The Band - User Interface
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className="uil uil-calendar-alt"></i>
                                    07/2021 - 08/2021
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div
                        className={cx('qualification__content', {
                            'qualification__content-active':
                                nav === 2 ? true : false,
                        })}
                    >
                        <div className={cx('qualification__data')}>
                            <div>
                                <h3 className={cx('qualification__title')}>
                                    DevT Blog
                                </h3>
                                <span className={cx('qualification__subtitle')}>
                                    My Blog
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>

                            <div>
                                <span
                                    className={cx('qualification__rounder')}
                                ></span>
                                <span
                                    className={cx('qualification__line')}
                                ></span>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div></div>

                            <div>
                                <span
                                    className={cx('qualification__rounder')}
                                ></span>
                                <span
                                    className={cx('qualification__line')}
                                ></span>
                            </div>

                            <div>
                                <h3 className={cx('qualification__title')}>
                                    Kệ Kho
                                </h3>
                                <span className={cx('qualification__subtitle')}>
                                    Bán kệ online
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div>
                                <h3 className={cx('qualification__title')}>
                                    Universe World Cup
                                </h3>
                                <span className={cx('qualification__subtitle')}>
                                    Blockchain - Landing page
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                            <div>
                                <span
                                    className={cx('qualification__rounder')}
                                ></span>
                                <span
                                    className={cx('qualification__line')}
                                ></span>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div></div>

                            <div>
                                <span
                                    className={cx('qualification__rounder')}
                                ></span>
                                <span
                                    className={cx('qualification__line')}
                                ></span>
                            </div>

                            <div>
                                <h3 className={cx('qualification__title')}>
                                    Billiard Staking
                                </h3>
                                <span className={cx('qualification__subtitle')}>
                                    Blockchain - Landing page
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className="uil uil-calendar-alt"></i>
                                    2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qualification;
