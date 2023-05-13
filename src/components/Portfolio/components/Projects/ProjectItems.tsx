import classNames from 'classnames/bind';

import styles from './Projects.module.scss';
import { ProjectType } from '~/types/project.type';

const cx = classNames.bind(styles);

interface PropsTypeProjectItems {
    data: ProjectType;
}

function ProjectItems({
    data: { title, categoryId, id, thumbnail },
}: PropsTypeProjectItems) {
    return (
        <div className={cx('projects__card')}>
            <img src={thumbnail} alt={title} className={cx('projects__img')} />
            <h3 className={cx('projects__title')}>{title}</h3>

            <a href="#!" className={cx('projects__button')}>
                Demo{' '}
                <i
                    className={`bx bx-right-arrow-alt ${cx(
                        'projects__button-icon'
                    )}`}
                ></i>
            </a>
        </div>
    );
}

export default ProjectItems;
