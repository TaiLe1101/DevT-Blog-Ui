import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Form from '~/components/Form';

const cx = classNames.bind(styles);

interface PropsTypeLogin {}

function Login({}: PropsTypeLogin) {
    return (
        <div className={cx('login', 'section')}>
            <div className={cx('container')}>
                <div className={cx('login__container')}>
                    <Form
                        title="login"
                        formControls={[
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

export default Login;
