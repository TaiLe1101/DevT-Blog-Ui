import classNames from 'classnames/bind';
import { Fragment } from 'react';

import styles from '../../Skills.module.scss';
import { SkillsType } from '../Backend/Backend';

const cx = classNames.bind(styles);

interface PropsTypeFrontend {}

const SKILLS: SkillsType[] = [
  {
    name: 'HTML',
    level: 'Advanced',
    group: 1,
  },
  {
    name: 'CSS',
    level: 'Advanced',
    group: 1,
  },
  {
    name: 'Javascript',
    level: 'Advanced',
    group: 1,
  },
  {
    name: 'Bootstrap',
    level: 'Intermediate',
    group: 2,
  },
  {
    name: 'ReactJs',
    level: 'Intermediate',
    group: 2,
  },
  {
    name: 'Git',
    level: 'Intermediate',
    group: 2,
  },
];

function Frontend({}: PropsTypeFrontend) {
  return (
    <div className={cx('skills__content')}>
      <h3 className={cx('skills__title')}>Frontend developer</h3>

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

export default Frontend;
