import classNames from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper() {
    return <div className={cx('wrapper')}>Popper component</div>;
}

export default Popper;
