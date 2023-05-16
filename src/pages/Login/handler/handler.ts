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
import request, { post } from '~/utils/request';
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
        const response = await post<DataLoginType, UserType>(
            '/auth/login',
            data
        );
        dispatch(loginSuccess(response));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const handleLogoutUser = async (
    id: number,
    dispatch: Dispatch<AnyAction>
) => {
    dispatch(logoutStart());

    try {
        await post('/auth/logout', { id: id });
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutFailed());
    }
};

export const handleRegister = () => {};
