import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeLogin {}

function Login({}: PropsTypeLogin) {
  return <div className={cx('wrapper')}>Login component</div>;
}

export default Login;
