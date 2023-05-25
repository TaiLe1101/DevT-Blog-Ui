import classNames from 'classnames/bind';

import styles from './PostDetail.module.scss';

const cx = classNames.bind(styles);

interface PropsTypePostDetail {}

function PostDetail({}: PropsTypePostDetail) {
    return (
        <>
            <div className={cx('wrapper')}>PostDetail component</div>
        </>
    );
}

export default PostDetail;
