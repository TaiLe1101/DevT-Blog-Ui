import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import {
    loginFailed,
    loginStart,
    loginSuccess,
    logoutFailed,
    logoutStart,
    logoutSuccess,
} from '../AuthSlice';
import { post } from '~/utils/request';
import { UserType } from '~/types/user.type';

export interface DataLoginType {
    username: string;
    password: string;
}

export const handleLoginUser = async (
    data: DataLoginType,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction
) => {
    dispatch(loginStart());
    try {
        const response = await post<UserType>('/auth/login', data);
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

export const handleRegister = () => {};
