import classNames from 'classnames/bind';
import Form from '~/components/Form';
import ROUTES from '~/configs/route';
import styles from './Login.module.scss';
import { useAppDispatch } from '~/hooks/reduxHooks';
import { authActions } from '~/redux/features/auth';
import { LoginPayload } from '~/api';

const cx = classNames.bind(styles);

function Login() {
    const dispatch = useAppDispatch();
    const handleLogin = (value: LoginPayload) => {
        console.log('value ->', value);
        dispatch(authActions.login(value));
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
                        linkLeft={{
                            path: ROUTES.BLOG,
                            title: 'Trở về trang chủ',
                        }}
                        linkRight={{
                            path: ROUTES.REGISTER,
                            title: 'Đăng ký ?',
                        }}
                        textButton="Đăng nhập"
                        iconButton={<i className="bx bx-lock-open-alt"></i>}
                    ></Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
