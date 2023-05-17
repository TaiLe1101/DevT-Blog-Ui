import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import routes from '~/configs/route';
import UserInfo from '~/layouts/DefaultLayout/components/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { Dispatch } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeHeader {
    setShowSidebar: Dispatch<React.SetStateAction<boolean>>;
    showSidebar: boolean;
}

function Header({ setShowSidebar, showSidebar }: PropsTypeHeader) {
    const currentUser = useSelector(
        (state: RootState) => state.auth.login.data?.data
    );

    return (
        <div className={cx('header')}>
            <div className={cx('header__content')}>
                <div
                    className={cx('header__hamburger', {
                        'header__hamburger--show': showSidebar,
                    })}
                    onClick={() => setShowSidebar((prev) => !prev)}
                >
                    <span
                        className={cx(
                            'header__hamburger-top',
                            'header__hamburger--common'
                        )}
                    ></span>
                    <span
                        className={cx(
                            'header__hamburger-middle',
                            'header__hamburger--common'
                        )}
                    ></span>
                    <span
                        className={cx(
                            'header__hamburger-bot',
                            'header__hamburger--common'
                        )}
                    ></span>
                </div>
                <div className={cx('header__control')}>
                    <UserInfo avatar={currentUser?.avatar || '/'}></UserInfo>
                </div>
            </div>
        </div>
    );
}

export default Header;
