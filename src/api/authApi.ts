import { UserModel } from '~/models';
import { ResponseAPIType } from './../types/api.type';
import { axiosClient, axiosClientToken } from '~/utils';

export interface LoginPayload {
    username: string;
    password: string;
    fullName: string;
}

const url = 'auth';
export const authApi = {
    login(payload: LoginPayload): Promise<UserModel> {
        return axiosClient.post(`${url}/login`, payload);
    },

    logout(): Promise<ResponseAPIType<boolean>> {
        return axiosClientToken.post(`${url}/logout`);
    },

    refreshToken(): Promise<ResponseAPIType<{ accessToken: string }>> {
        return axiosClientToken.post(`${url}/refresh`);
    },
};
