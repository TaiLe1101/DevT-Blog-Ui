import { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UserLayout.module.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

const cx = classNames.bind(styles);

interface PropsTypeUserLayout {
    children: ReactNode;
}

function UserLayout({ children }: PropsTypeUserLayout) {
    const [showSidebar, setShowSidebar] = useState<boolean>(true);

    return (
        <div className={cx('user-layout')}>
            <Header
                setShowSidebar={setShowSidebar}
                showSidebar={showSidebar}
            ></Header>
            <div className={cx('user-layout__container')}>
                <Sidebar showSidebar={showSidebar}></Sidebar>
                <div
                    className={cx('user-layout__content', 'container', {
                        'user-layout__content--show': showSidebar,
                    })}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default UserLayout;
