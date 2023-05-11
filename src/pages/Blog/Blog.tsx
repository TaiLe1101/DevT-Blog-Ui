import classNames from 'classnames/bind';

import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeBlog {}

function Blog({}: PropsTypeBlog) {
  return (
    <div className={cx('blog', 'section')}>
      <div className={cx('back-gr')}></div>
    </div>
  );
}

export default Blog;
