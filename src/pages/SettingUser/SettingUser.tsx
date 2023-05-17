import classNames from 'classnames/bind';

import styles from './SettingUser.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

const cx = classNames.bind(styles);

interface PropsTypeSettingUser {}

function SettingUser({}: PropsTypeSettingUser) {
    const currentUser = useSelector(
        (state: RootState) => state.auth.login.data?.data
    );
    return (
        <div className={cx('setting-user')}>
            <div className={cx('setting-user__top')}>
                <div className={cx('setting-user__group-avatar')}>
                    <img
                        src={currentUser?.avatar}
                        alt={currentUser?.fullName}
                        className={cx('setting-user__group-avatar-img')}
                    />

                    <i
                        className={cx(
                            'bx',
                            'bx-pencil',
                            'setting-user__group-avatar-icon'
                        )}
                    ></i>
                </div>

                <div className={cx('setting-user__info')}>
                    <h3 className={cx('setting-user__info-name')}>
                        {currentUser?.fullName}
                    </h3>

                    <p className={cx('setting-user__info-sub-name')}>
                        @{currentUser?.username}
                    </p>
                </div>
            </div>

            <div className={cx('setting-user__content')}>
                <div className={cx('setting-user__group')}>
                    <div className={cx('setting-user__control')}>
                        <label
                            htmlFor=""
                            className={cx('setting-user__control-label')}
                        >
                            Username
                        </label>
                        <input
                            className={cx('setting-user__control-input')}
                            type="text"
                            value={currentUser?.username}
                            readOnly={true}
                        />
                    </div>
                    <div className={cx('setting-user__control')}>
                        <label
                            htmlFor=""
                            className={cx('setting-user__control-label')}
                        >
                            Email
                        </label>
                        <input
                            className={cx('setting-user__control-input')}
                            type="text"
                            value="Taic21a.th1@gmail.com"
                            readOnly={true}
                        />
                    </div>
                    <div className={cx('setting-user__control')}>
                        <label
                            htmlFor=""
                            className={cx('setting-user__control-label')}
                        >
                            Address
                        </label>
                        <input
                            className={cx('setting-user__control-input')}
                            type="text"
                            value="B22/10 Ấp 2 xã Bình Chánh, Huyện Bình Chánh, TP.HCM"
                            readOnly={true}
                        />
                    </div>
                </div>

                <div className={cx('setting-user__group')}>
                    <div className={cx('setting-user__control')}>
                        <label
                            htmlFor=""
                            className={cx('setting-user__control-label')}
                        >
                            Full Name
                        </label>
                        <input
                            className={cx('setting-user__control-input')}
                            type="text"
                            value={currentUser?.fullName}
                            readOnly={true}
                        />
                    </div>
                    <div className={cx('setting-user__control')}>
                        <label
                            htmlFor=""
                            className={cx('setting-user__control-label')}
                        >
                            Phone Number
                        </label>
                        <input
                            className={cx('setting-user__control-input')}
                            type="text"
                            value="086 5850 073"
                            readOnly={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingUser;
