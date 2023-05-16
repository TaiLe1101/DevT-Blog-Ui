import { createSlice } from '@reduxjs/toolkit';
import { InitStateAPIType, ResponseAPIType } from '~/types/api.type';

import { UserType } from '~/types/user.type';

const initLoginState: InitStateAPIType<ResponseAPIType<UserType>> = {
    isLoading: false,
    isError: false,
    data: null,
};

const initLogoutState = {
    isLoading: false,
    isError: false,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        login: initLoginState,
        logout: initLogoutState,
    },
    reducers: {
        loginStart: (state) => {
            state.login.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.login.isLoading = false;
            state.login.isError = false;
            state.login.data = action.payload;
        },
        loginFailed: (state) => {
            state.login.isLoading = false;
            state.login.isError = true;
        },

        logoutStart: (state) => {
            state.logout.isLoading = true;
        },
        logoutSuccess: (state) => {
            state.logout.isLoading = false;
            state.login.data = null;
        },
        logoutFailed: (state) => {
            state.logout.isLoading = false;
            state.logout.isError = true;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    logoutFailed,
    logoutStart,
    logoutSuccess,
} = AuthSlice.actions;

export default AuthSlice.reducer;
