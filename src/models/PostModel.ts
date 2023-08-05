import { UserModel } from './UserModel';

export interface PostModel {
    id: number;
    title: string;
    desc: string;
    content: string;
    thumbnail: string;
    createdAt: Date;
    updatedAt: Date;
    user: UserModel;
}
