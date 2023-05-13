import { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PropsTypeButton {
    text?: string;
    href?: string;
    type?: 'button' | 'span';
    icon?: ReactNode;
    size?: 'small' | 'medium';
    disable?: boolean;
    target?: '_blank' | '_parent' | '_self' | '_top';
    download?: boolean;
    className?: string;

    onClick?: MouseEventHandler<
        HTMLButtonElement | HTMLSpanElement | HTMLAnchorElement
    >;
}

function Button({
    href,
    type,
    text,
    icon,
    size,
    disable,
    target,
    download,
    className,
    onClick,
}: PropsTypeButton) {
    if (href) {
        if (
            href.includes('http://') ||
            href.includes('https://') ||
            download ||
            target
        ) {
            return (
                <a
                    href={disable ? '#!' : href}
                    className={`${className} ${cx('button', 'button--flex', {
                        'button--small': size === 'small',
                        'button--disable': disable,
                    })}`}
                    target={target}
                    onClick={onClick}
                    download={download}
                >
                    {text}
                    {icon && icon}
                </a>
            );
        } else {
            return (
                <Link
                    to={disable ? '#' : href}
                    className={`${className} ${cx('button', 'button--flex', {
                        'button--small': size === 'small',
                        'button--disable': disable,
                    })}`}
                    onClick={onClick}
                >
                    {text}
                    {icon && icon}
                </Link>
            );
        }
    } else if (type === 'span') {
        return (
            <span
                className={`${className} ${cx('button', 'button--flex', {
                    'button--small': size === 'small',
                    'button--disable': disable,
                })}`}
                onClick={onClick}
            >
                {text}
                {icon && icon}
            </span>
        );
    }

    return (
        <button
            disabled={disable}
            className={`${className} ${cx('button', 'button--flex', {
                'button--small': size === 'small',
                'button--disable': disable,
            })}`}
            onClick={onClick}
        >
            {text}
            {icon && icon}
        </button>
    );
}

export default Button;
