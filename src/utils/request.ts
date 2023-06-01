import axios, { AxiosRequestConfig } from 'axios';
import { ResponseAPIType } from '~/types/api.type';

const request = axios.create({
    baseURL: process.env.REACT_APP_URL_API as string,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

/// R = Response
export const get = async <R>(
    url: string,
    options?: AxiosRequestConfig<any>
): Promise<ResponseAPIType<R>> => {
    const response = await request.get<ResponseAPIType<R>>(url, options);

    return response.data;
};

export const post = async <R>(
    url: string,
    data: any,
    options?: AxiosRequestConfig<any>
): Promise<ResponseAPIType<R>> => {
    const response = await request.post<ResponseAPIType<R>>(url, data, options);

    return response.data;
};

export default request;
