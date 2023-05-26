import { ReactNode, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UserLayout.module.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BreadCrumbs from '~/components/BreadCrumbs';

const cx = classNames.bind(styles);

interface PropsTypeUserLayout {
    children: ReactNode;
}

function UserLayout({ children }: PropsTypeUserLayout) {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    return (
        <div className={cx('user-layout')}>
            <Header
                setShowSidebar={setShowSidebar}
                showSidebar={showSidebar}
            ></Header>
            <div className={cx('user-layout__container')}>
                <Sidebar showSidebar={showSidebar}></Sidebar>
                <div className={cx('user-layout__content', 'container', {})}>
                    <BreadCrumbs />
                    <br />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default UserLayout;
