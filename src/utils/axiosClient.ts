import axios, {
    AxiosResponse,
    CreateAxiosDefaults,
    InternalAxiosRequestConfig,
} from 'axios';
import jwtDecode from 'jwt-decode';
import { persistLocalStorage } from './persist';
import { authApi } from '~/api';
import { JwtModel } from '~/models';

const configAxios: CreateAxiosDefaults = {
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

const axiosClientToken = axios.create({
    ...configAxios,
    withCredentials: true,
});
const axiosClient = axios.create(configAxios);

axiosClientToken.interceptors.request.use(
    async function (config: InternalAxiosRequestConfig) {
        const date = new Date();
        const MILLISECONDS_PER_SECOND = 1000;

        const nowTime = date.getTime() / MILLISECONDS_PER_SECOND;

        const currentUser = persistLocalStorage.getAuth().currentUser;
        let accessToken = '';

        if (currentUser) {
            accessToken = currentUser.accessToken;
        }

        const decodedToken = jwtDecode<JwtModel>(accessToken);

        if (decodedToken.exp < nowTime) {
            const res = await authApi.refreshToken();

            if (res.statusCode === 200) {
                config.headers.Authorization = `Bearer ${res.data.accessToken}`;
            }
        } else {
            let accessToken = '';
            const currentUser = persistLocalStorage.getAuth().currentUser;
            if (currentUser) {
                accessToken = currentUser.accessToken;
            }

            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClientToken.interceptors.response.use(
    function (response: AxiosResponse) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    function (response: AxiosResponse) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export { axiosClient, axiosClientToken };
