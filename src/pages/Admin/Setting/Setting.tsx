import classNames from 'classnames/bind';

import styles from './Setting.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeSetting {}

function Setting({}: PropsTypeSetting) {
    return <div className={cx('wrapper')}>Setting component</div>;
}

export default Setting;
