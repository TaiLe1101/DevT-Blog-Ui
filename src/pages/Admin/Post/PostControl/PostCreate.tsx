import classNames from 'classnames/bind';

import styles from './PostControl.module.scss';

const cx = classNames.bind(styles);

interface PropsTypePostCreate {}

function PostCreate({}: PropsTypePostCreate) {
    return <div className={cx('wrapper')}>PostCreate component</div>;
}

export default PostCreate;
