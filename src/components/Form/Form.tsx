import classNames from 'classnames/bind';

import styles from './Form.module.scss';
import FormControl, { PropsTypeFormControl } from './FormControl';
import Button from '../Button';
import { Link } from 'react-router-dom';
import routes from '~/configs/route';
import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

const cx = classNames.bind(styles);

interface PropsTypeForm {
    title: string;
    formControls: PropsTypeFormControl[];
    linkLeft: {
        title: string;
        path: string;
    };
    linkRight: {
        title: string;
        path: string;
    };

    textButton: string;
    iconButton?: ReactNode;
    setValues?: any;
    onSubmit: (formData: any) => void;
}

function Form({
    title,
    formControls,
    linkLeft,
    linkRight,
    textButton,
    iconButton,
    onSubmit,
}: PropsTypeForm) {
    const [formData, setFormData] = useState<any>({});
    const isLoading = useSelector(
        (state: RootState) => state.auth.login.isLoading
    );

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={cx('form')}>
            <h3 className={cx('form__title')}>{title}</h3>

            <form onSubmit={handleSubmit} className={cx('form__box')}>
                <div className={cx('form__group-control')}>
                    {formControls.map((control, index) => (
                        <FormControl
                            name={control.name}
                            key={index}
                            title={control.title}
                            type={control.type}
                            onChange={handleChangeValue}
                        ></FormControl>
                    ))}
                </div>

                <div className={cx('form__nav')}>
                    <Link className={cx('form__nav-link')} to={linkLeft.path}>
                        <i
                            className={`bx bx-arrow-back ${cx(
                                'form__nav-icon'
                            )}`}
                        ></i>{' '}
                        {linkLeft.title}
                    </Link>

                    <Link className={cx('form__nav-link')} to={linkRight.path}>
                        {linkRight.title}
                    </Link>
                </div>

                <Button
                    loading={isLoading}
                    text={textButton}
                    className={cx('form__button')}
                    icon={iconButton}
                ></Button>
            </form>
        </div>
    );
}

export default Form;
