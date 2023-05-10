import classNames from 'classnames/bind';

import styles from '../../Home.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

function Data() {
  return (
    <div className={cx('home__data')}>
      <h1 className={cx('home__title')}>
        Tài Lê <span>👋</span>
      </h1>
      <h3 className={cx('home__subtitle')}>Web Developer</h3>
      <p className={cx('home__description')}>Tôi là một lập trình viên chuyên về mãng website, sinh sống ở TP Hồ Chí Minh</p>
      <a href="#Hello" className={cxm('button', 'button--flex')}>
        Xin Chàooo
      </a>
    </div>
  );
}

export default Data;
