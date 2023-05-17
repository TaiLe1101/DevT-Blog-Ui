import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeNotFound {}

function NotFound({}: PropsTypeNotFound) {
    return <div className={cx('wrapper')}>NotFound component</div>;
}

export default NotFound;
