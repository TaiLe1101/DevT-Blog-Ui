import axios, { AxiosRequestConfig } from 'axios';
import { ResponseAPIType } from '~/types/api.type';

const request = axios.create({
    baseURL: process.env.REACT_APP_URL_API as string,
    withCredentials: true,
});

export const get = async <T>(
    url: string,
    options?: AxiosRequestConfig<any>
): Promise<ResponseAPIType<T>> => {
    const response = await request.get<ResponseAPIType<T>>(url, options);

    return response.data;
};

export const post = async <A, T>(
    url: string,
    data: A,
    options?: AxiosRequestConfig<any>
): Promise<ResponseAPIType<T>> => {
    const response = await request.post<ResponseAPIType<T>>(url, data, options);

    return response.data;
};

export default request;
