import { Row } from 'antd';
import classNames from 'classnames/bind';

import styles from './Admin.module.scss';

const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('admin')}>
            <Row></Row>
        </div>
    );
}

export default Admin;
