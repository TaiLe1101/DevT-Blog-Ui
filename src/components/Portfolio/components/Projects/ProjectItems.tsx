import classNames from 'classnames/bind';

import styles from './Projects.module.scss';
import { ProjectModel } from '~/models/ProjectModel';

const cx = classNames.bind(styles);

interface PropsTypeProjectItems {
    data: ProjectModel;
}

function ProjectItems({ data }: PropsTypeProjectItems) {
    return (
        <div className={cx('projects__card')}>
            <img
                src={data.thumbnail}
                alt={data.title}
                className={cx('projects__img')}
            />
            <h3 className={cx('projects__title')}>{data.title}</h3>

            <a
                href={data.path}
                target="_blank"
                className={cx('projects__button')}
                rel="noreferrer"
            >
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
