import classNames from 'classnames/bind';
import emailjs from 'emailjs-com';

import styles from './Contact.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';
import { LegacyRef, useRef } from 'react';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

interface PropsTypeContact {}

function Contact({}: PropsTypeContact) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const current = form.current as HTMLFormElement;
    emailjs.sendForm('service_0qxoex9', 'template_mwjx2aa', current, 'T4RgxTNw6CUz_UxC-').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className={`${cx('contact')} ${cxm('section')}`} id="contact">
      <h2 className={`${cxm('section__title')}`}>Get in touch</h2>
      <span className={`${cxm('section__subtitle')}`}>Contact me</span>

      <div className={`${cx('contact__container')} ${cxm('container', 'grid')}`}>
        <div className={cx('contact__content')}>
          <h3 className={cx('contact__title')}>Talk to me</h3>

          <div className={cx('contact__info')}>
            <div className={cx('contact__card')}>
              <i className={`bx bx-mail-send ${cx('contact__card-icon')}`}></i>

              <h3 className={cx('contact__card-title')}>Email</h3>
              <span className={cx('contact__card-data')}>user@gmail.com</span>

              <a href="mailto:taic21a.th1@gmail.com" className={cx('contact__button')}>
                Write me
                <i className={`bx bx-right-arrow-alt ${cx('contact__button-icon')}`}></i>
              </a>
            </div>

            <div className={cx('contact__card')}>
              <i className={`bx bx-phone-incoming ${cx('contact__card-icon')}`}></i>

              <h3 className={cx('contact__card-title')}>Phone Number</h3>
              <span className={cx('contact__card-data')}>777-777-777</span>

              <a href="#write-me" className={cx('contact__button')}>
                Write me
                <i className={`bx bx-right-arrow-alt ${cx('contact__button-icon')}`}></i>
              </a>
            </div>

            <div className={cx('contact__card')}>
              <i className={`bx bxl-messenger ${cx('contact__card-icon')}`}></i>

              <h3 className={cx('contact__card-title')}>Messenger</h3>
              <span className={cx('contact__card-data')}>user.fb123</span>

              <a href="#write-me" className={cx('contact__button')}>
                Write me
                <i className={`bx bx-right-arrow-alt ${cx('contact__button-icon')}`}></i>
              </a>
            </div>
          </div>
        </div>

        <div className={cx('contact__content')}>
          <h3 className={cx('contact__title')}>Write me your project</h3>

          <form onSubmit={sendEmail} ref={form} className={cx('contact__form')}>
            <div className={cx('contact__form-div')}>
              <label className={cx('contact__form-tag')}>Name</label>
              <input type="text" name="name" className={cx('contact__form-input')} placeholder="Insert your name" />
            </div>

            <div className={cx('contact__form-div')}>
              <label className={cx('contact__form-tag')}>Email</label>
              <input type="text" name="email" className={cx('contact__form-input')} placeholder="Insert your mail" />
            </div>

            <div className={cx('contact__form-div', 'contact__form-area')}>
              <label className={cx('contact__form-tag')}>Project</label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className={cx('contact__form-input')}
                placeholder="Insert your project"
              ></textarea>
            </div>

            <button className={`${cx('contact__button-send')} ${cxm('button', 'button--flex')}`}>
              Send Message <i className={`bx bx-send ${cx('contact__button-send-icon')}`}></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
