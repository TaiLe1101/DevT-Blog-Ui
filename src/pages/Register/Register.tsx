import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Form from '~/components/Form';
import ROUTES from '~/configs/route';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('register', 'section')}>
            <div className={cx('container')}>
                <div className={cx('register__container')}>
                    <Form
                        onSubmit={() => {}}
                        title="Register"
                        formControls={[
                            { title: 'Họ và tên', name: 'fullName' },
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
                        linkRight={{ path: ROUTES.LOGIN, title: 'Đăng nhập ?' }}
                        textButton="Đăng ký"
                        iconButton={<i className="bx bx-lock-open-alt"></i>}
                    ></Form>
                </div>
            </div>
        </div>
    );
}

export default Register;
