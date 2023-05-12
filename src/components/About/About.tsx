import classNames from 'classnames/bind';

import styles from './About.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

import aboutImg from '~/assets/avatar.jpg';
import CV from '~/assets/TopDev-Le-Tran-Tan-Tai-CV-1682842713.pdf';
import Info from './components/Info';
import Button from '../Button/Button';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function About() {
  return (
    <div className={`${cx('about')} ${cxm('section')}`} id="about">
      <h2 className={`${cxm('section__title')}`}>About me</h2>
      <span className={`${cxm('section__subtitle')}`}>My Introduction</span>

      <div className={`${cx('about__container')} ${cxm('container', 'grid')}`}>
        <img src={aboutImg} alt="about img" className={cx('about__img')} />

        <div className={cx('about__data')}>
          <Info></Info>
          <p className={cx('about__description')}>
            Tôi là một lập trình viên FullStack, tôi có thể tạo website với nhiều thư viện khác nhau, tôi có 1 năm kinh nghiệm làm
            việc trong lĩnh vực này và nhận lại được rất nhiều phản hồi tích cực về những dự án tôi đã làm.
          </p>

          <Button
            text="Download CV"
            icon={<i className="uil uil-file-download"></i>}
            download
            href={CV}
            className={cx('about__download')}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default About;
