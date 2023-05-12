import classNames from 'classnames/bind';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

export interface PropsTypeFormControl {
  title: string;
  type?: 'password' | 'text';
}

function FormControl({ title, type = 'text' }: PropsTypeFormControl) {
  return (
    <div className={cx('form__group')}>
      <input required type={type} className={cx('form__control')} />
      <label className={cx('form__label')}>{title}</label>
      <i></i>
    </div>
  );
}

export default FormControl;
