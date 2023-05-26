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
    loading?: boolean;
    backColor?: string;
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
    loading,
    className,
    backColor,
    onClick,
}: PropsTypeButton) {
    let Comp: any = 'button';

    const classes = cx(
        'button',
        'button--flex',
        {
            'button--small': size === 'small',
            'button--disable': disable || loading,
        },
        className
    );

    if (href) {
        if (
            href.includes('http://') ||
            href.includes('https://') ||
            download ||
            target
        ) {
            Comp = 'a';
        } else {
            Comp = Link;
        }
    } else if (type === 'span') {
        Comp = 'span';
    }

    return (
        <Comp
            style={{ backgroundColor: backColor }}
            href={href}
            to={href}
            disabled={loading || disable}
            className={classes}
            onClick={onClick}
            download={download}
            target={target}
        >
            {loading ? (
                <span>Loading...</span>
            ) : (
                <>
                    {text} {icon && icon}
                </>
            )}
        </Comp>
    );
}

export default Button;
