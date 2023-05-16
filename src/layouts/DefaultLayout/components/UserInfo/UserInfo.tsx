import classNames from 'classnames/bind';

import styles from './UserInfo.module.scss';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import UserInfoItem from './components/UserInfoItem/UserInfoItem';
import { handleLogoutUser } from '~/pages/Login/handler';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

interface PropsTypeUserInfo {
    avatar: string;
}

function UserInfo({ avatar }: PropsTypeUserInfo) {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        await handleLogoutUser(1, dispatch);
    };

    return (
        <div className={cx('user-info')}>
            <Tippy
                interactive
                delay={[0, 500]}
                render={(attr) => {
                    return (
                        <PopperWrapper>
                            <div {...attr}>
                                <UserInfoItem
                                    text="Info"
                                    classIcon={cx('bx', 'bx-face')}
                                />
                                <UserInfoItem
                                    text="Setting"
                                    classIcon={cx('bx', 'bx-cog')}
                                />
                                <UserInfoItem
                                    text="Logout"
                                    classIcon={cx('bx', 'bx-run')}
                                    order
                                    onClick={handleLogout}
                                />
                            </div>
                        </PopperWrapper>
                    );
                }}
            >
                <img src={avatar} alt="" className={cx('user-info__img')} />
            </Tippy>
        </div>
    );
}

export default UserInfo;
