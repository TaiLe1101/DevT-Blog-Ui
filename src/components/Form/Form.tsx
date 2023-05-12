import classNames from 'classnames/bind';

import styles from './Form.module.scss';
import FormControl, { PropsTypeFormControl } from './FormControl';
import Button from '../Button';
import { Link } from 'react-router-dom';
import routes from '~/configs/route';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface PropsTypeForm {
  title: string;
  formControls: PropsTypeFormControl[];
  linkLeft: string;
  linkRight: string;

  textButton: string;
  iconButton?: ReactNode;
}

function Form({ title, formControls, linkLeft, linkRight, textButton, iconButton }: PropsTypeForm) {
  return (
    <div className={cx('form')}>
      <h3 className={cx('form__title')}>{title}</h3>

      <form className={cx('form__box')}>
        <div className={cx('form__group-control')}>
          {formControls.map((control, index) => (
            <FormControl key={index} title={control.title} type={control.type}></FormControl>
          ))}
        </div>

        <div className={cx('form__nav')}>
          <Link className={cx('form__nav-link')} to={routes.blog}>
            <i className={`bx bx-arrow-back ${cx('form__nav-icon')}`}></i> {linkLeft}
          </Link>

          <Link className={cx('form__nav-link')} to={'#'}>
            {linkRight}
          </Link>
        </div>

        <Button text={textButton} className={cx('form__button')} icon={iconButton}></Button>
      </form>
    </div>
  );
}

export default Form;
