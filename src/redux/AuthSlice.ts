import { createSlice } from '@reduxjs/toolkit';
import { InitStateAPIType } from '~/types/api.type';

import { UserType } from '~/types/user.type';

const initState: InitStateAPIType<UserType> = {
    isLoading: false,
    isError: false,
    data: null,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        login: initState,
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
    },
});

export default AuthSlice.reducer;
