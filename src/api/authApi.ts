import { UserModel } from '~/models';
import { axiosClient, axiosClientToken } from '~/utils';
import { ResponseAPIType } from './../types/api.type';

export interface LoginPayload {
    username: string;
    password: string;
}

const url = 'auth';
export const authApi = {
    login(payload: LoginPayload): Promise<ResponseAPIType<UserModel>> {
        return axiosClient.post(`${url}/login`, payload);
    },

    logout(): Promise<ResponseAPIType<boolean>> {
        return axiosClientToken.post(`${url}/logout`);
    },

    refreshToken(): Promise<ResponseAPIType<{ accessToken: string }>> {
        return axiosClient.post(`${url}/refresh`);
    },
};
