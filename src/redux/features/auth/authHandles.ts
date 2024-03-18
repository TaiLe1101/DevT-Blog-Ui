import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { LoginPayload, authApi } from '~/api/authApi';
import { TOKEN } from '~/constants';
import { cookieStore } from '~/utils';
import { authActions } from './authSlice';
import { toast } from 'react-toastify';

export interface DataUpdateType {
    fullName?: string;
    avatar?: File | undefined | null;
    email?: string;
    phoneNumber?: string;
    address?: string;
    accessToken: string;
}

export const authHandles = {
    async login(
        payload: LoginPayload,
        dispatch: Dispatch<AnyAction>,
        navigate: NavigateFunction
    ) {
        const isLoggedIn = !!cookieStore.get(TOKEN.ACCESS_TOKEN);
        if (!isLoggedIn) {
            dispatch(authActions.login());
            try {
                const res = await authApi.login(payload);
                toast.success('Đăng nhập thành công 😍');
                dispatch(authActions.loginSuccess(res.data));
                cookieStore.set(TOKEN.ACCESS_TOKEN, res.data.accessToken);
                navigate(-1);
            } catch {
                toast.error('Đăng nhập thành công 🥲');
                dispatch(authActions.loginFailed());
            }
        }
    },
    async logout(dispatch: Dispatch<AnyAction>, navigate: NavigateFunction) {
        const isLoggedIn = !!cookieStore.get(TOKEN.ACCESS_TOKEN);
        if (isLoggedIn) {
            dispatch(authActions.logout());
            try {
                await authApi.logout();
                dispatch(authActions.logoutSuccess());
                cookieStore.remove(TOKEN.ACCESS_TOKEN);
                navigate('/blog');
            } catch (error) {
                dispatch(authActions.logoutFailed());
            }
        }
    },
};
