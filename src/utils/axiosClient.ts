import axios, {
    AxiosResponse,
    CreateAxiosDefaults,
    InternalAxiosRequestConfig,
} from 'axios';
import jwtDecode from 'jwt-decode';
import { authApi } from '~/api/authApi';
import { TOKEN } from '~/constants';
import { JwtModel } from '~/models';
import { cookieStore } from '~/utils/cookieStore';

const configAxios: CreateAxiosDefaults = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

const axiosClientToken = axios.create(configAxios);

const axiosClient = axios.create(configAxios);

axiosClientToken.interceptors.request.use(
    async function (config: InternalAxiosRequestConfig) {
        const date = new Date();
        const MILLISECONDS_PER_SECOND = 1000;

        const nowTime = date.getTime() / MILLISECONDS_PER_SECOND;

        const accessToken = cookieStore.get(TOKEN.ACCESS_TOKEN);

        if (accessToken) {
            const decodedToken = jwtDecode<JwtModel>(accessToken);

            if (decodedToken.exp < nowTime) {
                const res = await authApi.refreshToken();

                if (res.statusCode === 200) {
                    config.headers.Authorization = `Bearer ${res.data.accessToken}`;
                }
            } else {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
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

axiosClient.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export { axiosClient, axiosClientToken };
