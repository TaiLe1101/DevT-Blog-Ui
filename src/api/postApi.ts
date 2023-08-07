import { axiosClient, axiosClientToken } from '~/utils';
import { ResponseAPIType } from '~/types/api.type';
import { PostModel } from '~/models';

export interface CreatePostPayload {
    formData: FormData;
}

export interface DeletePostPayload {
    id: number;
}

const url = 'posts';
export const postApi = {
    getAll(): Promise<ResponseAPIType<PostModel[]>> {
        return axiosClient.get(url);
    },
    createPost(
        payload: CreatePostPayload
    ): Promise<ResponseAPIType<PostModel>> {
        return axiosClientToken.post(`${url}/create`, payload.formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    delete(payload: DeletePostPayload): Promise<ResponseAPIType<boolean>> {
        return axiosClientToken.delete(`${url}/delete/${payload.id}`);
    },
};
