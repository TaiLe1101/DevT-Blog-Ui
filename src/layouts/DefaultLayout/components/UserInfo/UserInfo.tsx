import classNames from 'classnames/bind';

import styles from './UserInfo.module.scss';

import Tippy from '@tippyjs/react/headless';
import { useNavigate } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ROUTES from '~/configs/route';
import { useAppDispatch } from '~/hooks';
import { authActions, authHandles } from '~/redux/features/auth';
import { PropsTypeUserInfoItem } from '~/types/prop.type';
import UserInfoItem from './components/UserInfoItem/UserInfoItem';

const cx = classNames.bind(styles);

interface PropsTypeUserInfo {
    avatar: string;
}

const USER_ITEM_LIST: PropsTypeUserInfoItem[] = [
    {
        text: 'Admin',
        href: ROUTES.ADMIN,
        classIcon: cx('bx', 'bxs-cube-alt'),
    },
    {
        text: 'Info',
        href: ROUTES.USER_INFO,
        classIcon: cx('bx', 'bx-face'),
    },
    {
        text: 'Setting',
        href: ROUTES.SETTING,
        classIcon: cx('bx', 'bx-cog'),
    },
];

function UserInfo({ avatar }: PropsTypeUserInfo) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        authHandles.logout(dispatch, navigate);
    };

    return (
        <div className={cx('user-info')}>
            <Tippy
                hideOnClick={false}
                interactive
                delay={[0, 500]}
                render={(attr) => {
                    return (
                        <PopperWrapper>
                            <div {...attr}>
                                {USER_ITEM_LIST.map((item, index) => {
                                    return (
                                        <UserInfoItem
                                            key={index}
                                            text={item.text}
                                            href={item.href}
                                            classIcon={item.classIcon}
                                            onClick={() =>
                                                navigate(`${item.href}`)
                                            }
                                        ></UserInfoItem>
                                    );
                                })}

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
