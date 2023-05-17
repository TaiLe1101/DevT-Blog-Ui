import classNames from 'classnames/bind';

import styles from './Post.module.scss';

const cx = classNames.bind(styles);

interface PropsTypePost {}

function Post({}: PropsTypePost) {
    return <div className={cx('wrapper')}>Post component</div>;
}

export default Post;