import classNames from 'classnames/bind';

import styles from './Admin.module.scss';
import { Route, Routes } from 'react-router-dom';
import Post from './Post';

const cx = classNames.bind(styles);

interface PropsTypeAdmin {}

function Admin({}: PropsTypeAdmin) {
    return (
        <>
            <div className={cx('wrapper')}>Admin component</div>
        </>
    );
}

export default Admin;
