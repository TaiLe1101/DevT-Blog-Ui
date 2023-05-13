import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import { ReactNode } from 'react';
import Header from './components/Header';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

interface PropsTypeDefaultLayout {
    children: ReactNode;
}

function DefaultLayout({ children }: PropsTypeDefaultLayout) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
