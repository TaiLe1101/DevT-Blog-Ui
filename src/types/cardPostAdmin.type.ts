export interface PropsTypeCardAdminPost {
    thumbnail: string;
    title: string;
    desc?: string;
    onNavigate?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CardAdminPostType extends PropsTypeCardAdminPost {
    id: number;
}
