import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';

import styles from './BreadCrumbs.module.scss';

const cx = classNames.bind(styles);

function BreadCrumbs() {
    const location = useLocation();
    const breadCrumbs = location.pathname
        .split('/')
        .filter((segment) => segment !== '');
    if (breadCrumbs.length <= 1) {
        return <></>;
    }

    return (
        <div className={cx('bread-crumbs')}>
            {breadCrumbs.map((crumb, index) => {
                const tempPath = `/${breadCrumbs
                    .slice(0, index + 1)
                    .join('/')}`;
                const isActive = location.pathname.startsWith(crumb);

                const label = crumb.charAt(0).toUpperCase() + crumb.slice(1);
                if (crumb !== breadCrumbs[breadCrumbs.length - 1]) {
                    return (
                        <Fragment key={index}>
                            <Link
                                className={cx('bread-crumbs__item', {
                                    'bread-crumbs__item--active': isActive,
                                    'bread-crumbs__item--del-hover':
                                        label.toUpperCase() === 'EDIT'
                                            ? true
                                            : false,
                                })}
                                to={
                                    label.toUpperCase() === 'EDIT'
                                        ? '#'
                                        : tempPath
                                }
                            >
                                {label}
                            </Link>
                            <i className={cx('uil', 'uil-arrow-right')}></i>
                        </Fragment>
                    );
                } else {
                    return <Fragment key={index}></Fragment>;
                }
            })}
            <span
                className={cx('bread-crumbs__item', {
                    'bread-crumbs__item--active': true,
                })}
            >
                {breadCrumbs.pop()}
            </span>
        </div>
    );
}

export default BreadCrumbs;
