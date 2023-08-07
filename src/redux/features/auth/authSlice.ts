import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginPayload } from '~/api';
import { TOKEN } from '~/constants';
import { UserModel } from '~/models';
import { cookieStore } from '~/utils';

// import avatar from '~/assets/avatar.jpg';
// const initLoginState: InitStateAPIType<ResponseAPIType<UserType>> = {
//     isLoading: false,
//     isError: false,
//     data: {
//         status: 200,
//         message: 'SUCCESS',
//         error: false,
//         data: {
//             id: 1,
//             fullName: 'Lê Trần Tấn Tài',
//             accessToken: 'a',
//             address: 'TP. Hồ Chí Minh',
//             avatar,
//             email: 'Contact.DevT.1101@gmail.com',
//             phoneNumber: '0865850073',
//             username: 'admin',
//         },
//     },
// };

export interface AuthState {
    isLoading: boolean;
    isLogged: boolean;
    currentUser?: UserModel;
}

const initialState: AuthState = {
    isLogged: false,
    isLoading: false,
    currentUser: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isLoading = true;
        },
        loginSuccess(state, action: PayloadAction<UserModel>) {
            state.isLoading = false;
            state.isLogged = true;
            state.currentUser = action.payload;
        },
        loginFailed(state) {
            state.isLoading = false;
        },

        logout(state) {
            state.isLoading = true;
        },
        logoutSuccess(state) {
            state.isLoading = false;
            state.isLogged = false;
            state.currentUser = undefined;
        },
        logoutFailed(state) {
            state.isLoading = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
