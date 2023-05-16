import classNames from 'classnames/bind';

import styles from './Form.module.scss';
import { ChangeEventHandler } from 'react';

const cx = classNames.bind(styles);

export interface PropsTypeFormControl {
    title: string;
    type?: 'password' | 'text';
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

function FormControl({
    title,
    type = 'text',
    name,
    onChange,
}: PropsTypeFormControl) {
    return (
        <div className={cx('form__group')}>
            <input
                name={name}
                required
                type={type}
                className={cx('form__control')}
                onChange={onChange}
            />
            <label className={cx('form__label')}>{title}</label>
            <i></i>
        </div>
    );
}

export default FormControl;
