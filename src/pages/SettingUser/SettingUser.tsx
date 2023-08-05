import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';
import AvatarUser from './AvatarUser';
import styles from './SettingUser.module.scss';
import { useAppSelector } from '~/hooks/reduxHooks';

const cx = classNames.bind(styles);

function SettingUser() {
    const currentUser = useAppSelector((state) => state.auth.currentUser);

    const [isLoadingUpdate, setIsLoadingUpdate] = useState<boolean>(false);
    const [fileUpload, setFileUpload] = useState<File | undefined | null>(null);
    const [fullName, setFullName] = useState<string | undefined>(
        currentUser?.fullName
    );
    const [email, setEmail] = useState<string | undefined>(currentUser?.email);
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(
        currentUser?.phoneNumber
    );
    const [address, setAddress] = useState<string | undefined>(
        currentUser?.address
    );

    const dispatch = useDispatch();

    const handleSubmit = () => {
        setIsLoadingUpdate(true);
    };

    return (
        <div className={cx('setting-user')}>
            <div className={cx('setting-user__top')}>
                <AvatarUser
                    avatar={currentUser ? currentUser.avatar : ''}
                    setFileUpload={setFileUpload}
                />

                <div className={cx('setting-user__info')}>
                    <h3 className={cx('setting-user__info-name')}>
                        {fullName}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className={cx('setting-user__bot')}>
                <Button
                    text="Update"
                    className={cx('setting-user__bot-button')}
                    onClick={handleSubmit}
                    loading={isLoadingUpdate}
                ></Button>
            </div>
        </div>
    );
}

export default SettingUser;
