import classNames from 'classnames/bind';

import styles from './Project.module.scss';

const cx = classNames.bind(styles);

function Project() {
    return <div className={cx('wrapper')}>Project component</div>;
}

export default Project;
