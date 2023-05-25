import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';

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
                                })}
                                to={tempPath}
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
            <NavLink
                className={(nav) =>
                    cx('bread-crumbs__item', {
                        'bread-crumbs__item--active': nav.isActive,
                    })
                }
                to={location.pathname}
            >
                {breadCrumbs.pop()}
            </NavLink>
        </div>
    );
}

export default BreadCrumbs;
