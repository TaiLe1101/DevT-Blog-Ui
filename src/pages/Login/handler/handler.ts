import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
    updateUserFail,
    updateUserStart,
    updateUserSuccess,
} from '../AuthSlice';
import { post } from '~/utils/request';
import { UserType } from '~/types/user.type';
import { ResponseAPIType } from '~/types/api.type';

export interface DataLoginType {
    username: string;
    password: string;
}

export interface DataUpdateType {
    fullName?: string;
    avatar?: File | undefined | null;
    email?: string;
    phoneNumber?: string;
    address?: string;
    accessToken: string;
}

export const handleLoginUser = async (
    data: DataLoginType,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction
) => {
    dispatch(loginStart());
    try {
        const response = await post<ResponseAPIType<UserType>>(
            '/auth/login',
            data
        );
        dispatch(loginSuccess(response));
        navigate('/blog');
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const handleLogoutUser = async (
    id: number,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction
) => {
    dispatch(logoutStart());

    try {
        await post('/auth/logout', { id: id });
        dispatch(logoutSuccess());
        navigate('/');
    } catch (error) {
        dispatch(logoutFailed());
    }
};

export const handleUpdateUser = async (
    data: DataUpdateType,
    dispatch: Dispatch<AnyAction>
) => {
    dispatch(updateUserStart());

    try {
        const { accessToken, ...other } = data;
        const response = await post<ResponseAPIType<UserType>>(
            '/users/update',
            { ...other },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        dispatch(
            updateUserSuccess({
                ...response,
                data: { ...response.data, accessToken: accessToken },
            })
        );
    } catch (error) {
        dispatch(updateUserFail());
    }
};

export const handleRegister = () => {};
