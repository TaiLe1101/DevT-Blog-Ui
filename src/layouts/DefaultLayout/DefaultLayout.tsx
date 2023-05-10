import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeDefaultLayout {
  children: ReactNode;
}

function DefaultLayout({ children }: PropsTypeDefaultLayout) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>Header</div>
      {children}
    </div>
  );
}

export default DefaultLayout;
