import classNames from 'classnames/bind';

import styles from './SettingUser.module.scss';
import { useState, useRef, ChangeEvent, Dispatch } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeAvatarUser {
    avatar: string;
    setFileUpload: Dispatch<React.SetStateAction<File | null | undefined>>;
}

function AvatarUser({ avatar, setFileUpload }: PropsTypeAvatarUser) {
    const [imgUpdate, setImgUpdate] = useState<string>(avatar);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpdateImg = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handlePreviewImg = (e: ChangeEvent<HTMLInputElement>) => {
        const img = e.target.files?.[0];
        if (img) {
            setFileUpload(img);
            const imgUrl = URL.createObjectURL(img);

            setImgUpdate(imgUrl);
        }
    };

    return (
        <div className={cx('setting-user__group-avatar')}>
            <input
                ref={inputRef}
                type="file"
                hidden
                accept="image/*"
                onChange={handlePreviewImg}
            />
            <img
                src={imgUpdate}
                alt={imgUpdate}
                className={cx('setting-user__group-avatar-img')}
            />

            <i
                className={cx(
                    'bx',
                    'bx-pencil',
                    'setting-user__group-avatar-icon'
                )}
                onClick={handleUpdateImg}
            ></i>
        </div>
    );
}

export default AvatarUser;
