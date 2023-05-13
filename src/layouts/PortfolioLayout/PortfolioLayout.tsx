import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './PortfolioLayout.module.scss';

import Header from './components/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop';

const cx = classNames.bind(styles);

interface PropsTypePortfolioLayout {
    children: ReactNode;
}

function PortfolioLayout({ children }: PropsTypePortfolioLayout) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            {children}
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
        </div>
    );
}

export default PortfolioLayout;
