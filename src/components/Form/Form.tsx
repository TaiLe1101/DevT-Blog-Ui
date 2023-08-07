import classNames from 'classnames/bind';

import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '~/configs/route';
import Button from '../Button';
import styles from './Form.module.scss';
import FormControl, { PropsTypeFormControl } from './FormControl';
import { useAppSelector } from '~/hooks';

const cx = classNames.bind(styles);

interface PropsTypeForm {
    title: string;
    formControls: PropsTypeFormControl[];

    textButton: string;
    iconButton?: ReactNode;
    setValues?: any;
    onSubmit: (formData: any) => void;
}

function Form({
    title,
    formControls,
    textButton,
    iconButton,
    onSubmit,
}: PropsTypeForm) {
    const [formData, setFormData] = useState<any>({});
    const { isLoading } = useAppSelector((state) => state.auth);

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
                    <Link className={cx('form__nav-link')} to={ROUTES.BLOG}>
                        <i
                            className={`bx bx-arrow-back ${cx(
                                'form__nav-icon'
                            )}`}
                        ></i>
                        Trở về trang chủ ?
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
