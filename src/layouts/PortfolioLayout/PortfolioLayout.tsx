import classNames from 'classnames/bind';

import styles from './PortfolioLayout.module.scss';
import { ReactNode } from 'react';
import Header from './Header/Header';

const cx = classNames.bind(styles);

interface PropsTypePortfolioLayout {
  children: ReactNode;
}

function PortfolioLayout({ children }: PropsTypePortfolioLayout) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      {children}
    </div>
  );
}

export default PortfolioLayout;
