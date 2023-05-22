import classNames from 'classnames/bind';

import styles from './UserInfo.module.scss';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import UserInfoItem from './components/UserInfoItem/UserInfoItem';
import { handleLogoutUser } from '~/pages/Login/handler';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '~/configs/route';
import { PropsTypeUserInfoItem } from '~/types/prop.type';
import { changeNav } from '~/layouts/UserLayout/components/Sidebar/SidebarSlice';

const cx = classNames.bind(styles);

interface PropsTypeUserInfo {
    avatar: string;
}

const USER_ITEM_LIST: PropsTypeUserInfoItem[] = [
    {
        text: 'Admin',
        href: routes.admin,
        classIcon: cx('bx', 'bxs-cube-alt'),
    },
    {
        text: 'Info',
        href: routes.userInfo,
        classIcon: cx('bx', 'bx-face'),
    },
    {
        text: 'Setting',
        href: routes.adminSetting,
        classIcon: cx('bx', 'bx-cog'),
    },
];

function UserInfo({ avatar }: PropsTypeUserInfo) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async () => {
        await handleLogoutUser(1, dispatch, navigate);
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
                                {USER_ITEM_LIST.map((item, index) => {
                                    return (
                                        <UserInfoItem
                                            key={index}
                                            text={item.text}
                                            href={item.href}
                                            classIcon={item.classIcon}
                                            onClick={() =>
                                                dispatch(
                                                    changeNav({ id: index + 2 })
                                                )
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
