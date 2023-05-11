import classNames from 'classnames/bind';
import { Fragment } from 'react';
import styles from '../../Skills.module.scss';

const cx = classNames.bind(styles);

interface PropsTypeBackend {}

export type SkillsType = {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  group: 1 | 2;
};

const SKILLS: SkillsType[] = [
  {
    name: 'Express',
    level: 'Intermediate',
    group: 1,
  },
  {
    name: 'PHP',
    level: 'Intermediate',
    group: 1,
  },
  {
    name: 'ASP.NET',
    level: 'Intermediate',
    group: 1,
  },
  {
    name: 'MySQL',
    level: 'Intermediate',
    group: 2,
  },
  {
    name: 'MongoDB',
    level: 'Intermediate',
    group: 2,
  },
  {
    name: 'PostgreSQL',
    level: 'Intermediate',
    group: 2,
  },
];

function Backend({}: PropsTypeBackend) {
  return (
    <div className={cx('skills__content')}>
      <h3 className={cx('skills__title')}>Backend developer</h3>

      <div className={cx('skills__box')}>
        <div className={cx('skills__group')}>
          {SKILLS.map((skill, index) => {
            if (skill.group === 1) {
              return (
                <div key={index} className={cx('skills__data')}>
                  <i className="bx bx-badge-check"></i>

                  <div>
                    <h3 className={cx('skills__name')}>{skill.name}</h3>
                    <span className={cx('skills__level')}>{skill.level}</span>
                  </div>
                </div>
              );
            } else {
              return <Fragment key={index}></Fragment>;
            }
          })}
        </div>

        <div className={cx('skills__group')}>
          {SKILLS.map((skill, index) => {
            if (skill.group === 2) {
              return (
                <div key={index} className={cx('skills__data')}>
                  <i className="bx bx-badge-check"></i>

                  <div>
                    <h3 className={cx('skills__name')}>{skill.name}</h3>
                    <span className={cx('skills__level')}>{skill.level}</span>
                  </div>
                </div>
              );
            } else {
              return <Fragment key={index}></Fragment>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Backend;
