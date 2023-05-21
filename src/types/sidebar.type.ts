export interface ControlNavType {
    id: number;
    title: string;
    classIcon: string;
    path: string;
    children?: ControlNavType[];
}
