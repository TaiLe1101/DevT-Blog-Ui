import { axiosClient, axiosClientToken } from '~/utils';
import { ResponseAPIType } from '~/types/api.type';
import { PostModel } from '~/models';

const url = 'posts';
export const postApi = {
    getAll(): Promise<ResponseAPIType<PostModel[]>> {
        return axiosClient.get(url);
    },
};
