import { MouseEventHandler } from 'react';

export interface PropsTypeUserInfoItem {
    text: string;
    classIcon?: string;
    order?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string;
}
