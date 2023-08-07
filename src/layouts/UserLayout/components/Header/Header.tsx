import classNames from 'classnames/bind';
import { Dispatch } from 'react';

import UserInfo from '~/layouts/DefaultLayout/components/UserInfo';
import styles from './Header.module.scss';
import { useAppSelector } from '~/hooks';

const cx = classNames.bind(styles);

interface PropsTypeHeader {
    setShowSidebar: Dispatch<React.SetStateAction<boolean>>;
    showSidebar: boolean;
}

function Header({ setShowSidebar, showSidebar }: PropsTypeHeader) {
    const currenUser = useAppSelector((state) => state.auth.currentUser);

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
                    <UserInfo
                        avatar={currenUser?.avatar || '/images/no-image.jpg'}
                    ></UserInfo>
                </div>
            </div>
        </div>
    );
}

export default Header;
