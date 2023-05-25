export interface PropsTypeControlNav {
    title: string;
    classIcon: string;
    path: string;
    level: number;
    tooltip: string | undefined;
    isParent?: boolean;
}

export interface ControlNavType extends PropsTypeControlNav {
    id: number;
}
