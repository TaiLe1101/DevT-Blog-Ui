import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { LoginPayload } from '~/api';
import Form from '~/components/Form';
import { authHandles } from '~/redux/features/auth';
import { useAppDispatch } from '~/hooks';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogin = (value: LoginPayload) => {
        authHandles.login(
            {
                username: value.username,
                password: value.password,
            },
            dispatch,
            navigate
        );
    };

    return (
        <div className={cx('login', 'section')}>
            <div className={cx('container')}>
                <div className={cx('login__container')}>
                    <Form
                        onSubmit={handleLogin}
                        title="login"
                        formControls={[
                            { title: 'Tên đăng nhập', name: 'username' },
                            {
                                title: 'Mật khẩu',
                                type: 'password',
                                name: 'password',
                            },
                        ]}
                        textButton="Đăng nhập"
                        iconButton={<i className="bx bx-lock-open-alt"></i>}
                    ></Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
