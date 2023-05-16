import classNames from 'classnames/bind';

import styles from './Popper.module.scss';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeWrapper {
    children: ReactNode;
}

function Wrapper({ children }: PropsTypeWrapper) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
