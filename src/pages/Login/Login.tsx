import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Form from '~/components/Form';
import { DataLoginType, handleLoginUser } from './handler';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '~/configs/route';

const cx = classNames.bind(styles);

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (value: DataLoginType) => {
        handleLoginUser(value, dispatch, navigate);
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
                            path: routes.blog,
                            title: 'Trở về trang chủ',
                        }}
                        linkRight={{
                            path: routes.register,
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
