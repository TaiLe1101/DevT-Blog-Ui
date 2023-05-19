import classNames from 'classnames/bind';

import styles from './SettingUser.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeSettingUser {}

function SettingUser({}: PropsTypeSettingUser) {
    const currentUser = useSelector(
        (state: RootState) => state.auth.login.data?.data
    );

    const [fullName, setFullName] = useState<string | undefined>(
        currentUser?.fullName
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
                            defaultValue={currentUser?.email}
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
                            defaultValue={currentUser?.address}
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
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
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
                            defaultValue={currentUser?.phoneNumber}
                        />
                    </div>
                </div>
            </div>

            <div className={cx('setting-user__bot')}>
                <Button
                    text="Update"
                    className={cx('setting-user__bot-button')}
                ></Button>
            </div>
        </div>
    );
}

export default SettingUser;
