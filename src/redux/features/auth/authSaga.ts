import { call, fork, put, take } from 'redux-saga/effects';
import { persistLocalStorage } from '~/utils';

import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload, authApi } from '~/api';
import { authActions } from './authSlice';
import { ResponseAPIType } from '~/types/api.type';
import { UserModel } from '~/models';

function* handleLogin(payload: LoginPayload) {
    try {
        const res: ResponseAPIType<UserModel> = yield call(
            authApi.login,
            payload
        );
        if (res.statusCode === 200) {
            put(authActions.loginSuccess(res.data));
        } else {
            put(authActions.loginFailed());
        }
    } catch (error) {
        put(authActions.loginFailed());
    }
}

function* handleLogout() {
    try {
        const res: ResponseAPIType<boolean> = yield call(authApi.logout);
        if (res.statusCode === 200) {
            put(authActions.logoutSuccess());
        } else {
            put(authActions.logoutFailed());
        }
    } catch (error) {
        put(authActions.logoutFailed());
    }
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = persistLocalStorage.getAuth().isLogged;
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(
                authActions.login.type
            );
            yield fork(handleLogin, action.payload);
        }

        yield take([authActions.logout.type, authActions.loginFailed.type]);
        yield fork(handleLogout);
    }
}

export function* authSaga() {
    yield fork(watchLoginFlow);
}
