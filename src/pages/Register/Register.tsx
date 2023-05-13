import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Form from '~/components/Form';

const cx = classNames.bind(styles);

interface PropsTypeRegister {}

function Register({}: PropsTypeRegister) {
    return (
        <div className={cx('register', 'section')}>
            <div className={cx('container')}>
                <div className={cx('register__container')}>
                    <Form
                        title="Register"
                        formControls={[
                            { title: 'Họ và tên' },
                            { title: 'Tên đăng nhập' },
                            { title: 'Mật khẩu', type: 'password' },
                        ]}
                        linkLeft="Back to home"
                        linkRight="Register ?"
                        textButton="Đăng nhập"
                        iconButton={<i className="bx bx-lock-open-alt"></i>}
                    ></Form>
                </div>
            </div>
        </div>
    );
}

export default Register;
