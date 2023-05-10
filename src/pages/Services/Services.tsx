import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Services.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

interface PropsTypeServices {}

function Services({}: PropsTypeServices) {
  const [showModal, setShowModal] = useState<number>(0);

  const handleShowModal = (index: number) => {
    setShowModal(index);
  };

  const handleCloseModal = () => {
    setShowModal(0);
  };

  return (
    <div className={`${cx('services')} ${cxm('section')}`} id="services">
      <h2 className={`${cxm('section__title')}`}>Services</h2>
      <span className={`${cxm('section__subtitle')}`}>What is offer</span>

      <div className={`${cx('services__container')} ${cxm('container', 'grid')}`}>
        <div className={cx('services__content')}>
          <div>
            <i className={`uil uil-web-grid ${cx('services__icon')}`}></i>
            <h3 className={cx('services__title')}>
              Product <br /> Development
            </h3>
          </div>

          <span
            className={cx('services__button')}
            onClick={() => {
              handleShowModal(1);
            }}
          >
            View More
            <i className={`uil uil-arrow-right ${cx('services__button-icon')}`}></i>
          </span>

          <div className={cx('services__modal', { 'active-modal': showModal === 1 ? true : false })}>
            <div className={cx('services__modal-content')}>
              <i className={`uil uil-times ${cx('services__modal-close')}`} onClick={handleCloseModal}></i>
              <h3 className={cx('services__modal-title')}>Website đầu tiên</h3>
              <p className={cx('services__modal-description')}>Sản phẩm đầu tay</p>

              <ul className={`${cx('services__modal-services')} ${cxm('grid')}`}>
                <li className={cx('services__modal-service')}>
                  <i className={`uil uil-check-circle ${cx('services__modal-icon')}`}></i>
                  <p className={cx('services__modal-info')}>I develop user interface</p>
                </li>

                <li className={cx('services__modal-service')}>
                  <i className={`uil uil-check-circle ${cx('services__modal-icon')}`}></i>
                  <p className={cx('services__modal-info')}>I develop user interface</p>
                </li>

                <li className={cx('services__modal-service')}>
                  <i className={`uil uil-check-circle ${cx('services__modal-icon')}`}></i>
                  <p className={cx('services__modal-info')}>I develop user interface</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx('services__content')}>
          <div>
            <i className={`uil uil-web-grid ${cx('services__icon')}`}></i>
            <h3 className={cx('services__title')}>
              Product <br /> Development
            </h3>
          </div>

          <span className={cx('services__button')} onClick={() => handleShowModal(2)}>
            View More
            <i className={`uil uil-arrow-right ${cx('services__button-icon')}`}></i>
          </span>

          <div className={cx('services__modal', { 'active-modal': showModal === 2 ? true : false })}>
            <div className={cx('services__modal-content')}>
              <i className={`uil uil-times ${cx('services__modal-close')}`} onClick={handleCloseModal}></i>
              <h3 className={cx('services__modal-title')}>Website thứ 2</h3>
              <p className={cx('services__modal-description')}>Sản phẩm thứ 2</p>

              <ul className={`${cx('services__modal-services')} ${cxm('grid')}`}>
                <li className={cx('services__modal-service')}>
                  <i className={`uil uil-check-circle ${cx('services__modal-icon')}`}></i>
                  <p className={cx('services__modal-info')}>I develop user interface</p>
                </li>

                <li className={cx('services__modal-service')}>
                  <i className={`uil uil-check-circle ${cx('services__modal-icon')}`}></i>
                  <p className={cx('services__modal-info')}>I develop user interface</p>
                </li>

                <li className={cx('services__modal-service')}>
                  <i className={`uil uil-check-circle ${cx('services__modal-icon')}`}></i>
                  <p className={cx('services__modal-info')}>I develop user interface</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx('services__content')}>
          <div>
            <i className={`uil uil-web-grid ${cx('services__icon')}`}></i>
            <h3 className={cx('services__title')}>
              Product <br /> Development
            </h3>
          </div>

          <span className={cx('services__button')} onClick={() => handleShowModal(3)}>
            View More
            <i className={`uil uil-arrow-right ${cx('services__button-icon')}`}></i>
          </span>

          <div className={cx('services__modal', { 'active-modal': showModal === 3 ? true : false })}>
            <div className={cx('services__modal-content')}>
              <i className={`uil uil-times ${cx('services__modal-close')}`} onClick={handleCloseModal}></i>
              <h3 className={cx('services__modal-title')}>Website thứ 3</h3>
              <p className={cx('services__modal-description')}>Sản phẩm thứ 3</p>

              <ul className={`${cx('services__modal-services')} ${cxm('grid')}`}>
                <li className={cx('services__modal-service')}>
                  <i className={`uil uil-check-circle ${cx('services__modal-icon')}`}></i>
                  <p className={cx('services__modal-info')}>I develop user interface</p>
                </li>

                <li className={cx('services__modal-service')}>
                  <i className={`uil uil-check-circle ${cx('services__modal-icon')}`}></i>
                  <p className={cx('services__modal-info')}>I develop user interface</p>
                </li>

                <li className={cx('services__modal-service')}>
                  <i className={`uil uil-check-circle ${cx('services__modal-icon')}`}></i>
                  <p className={cx('services__modal-info')}>I develop user interface</p>
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
