import classNames from 'classnames/bind';

import styles from '../../Home.module.scss';

const cx = classNames.bind(styles);

function Social() {
  return (
    <div className={cx('home__social')}>
      <a href="https://www.instagram.com/tai_leeeee" className={cx('home__social-icon')} target="_blank" rel="noreferrer">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://facebook.com/TaiLe1101" className={cx('home__social-icon')} target="_blank" rel="noreferrer">
        <i className="uil uil-facebook-f"></i>
      </a>
      <a href="https://github.com/TaiLe1101" className={cx('home__social-icon')} target="_blank" rel="noreferrer">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
