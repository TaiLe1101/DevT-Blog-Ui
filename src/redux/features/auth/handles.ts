export interface DataUpdateType {
    fullName?: string;
    avatar?: File | undefined | null;
    email?: string;
    phoneNumber?: string;
    address?: string;
    accessToken: string;
}

// export const handleLoginUser = async (
//     data: LoginPayload,
//     dispatch: Dispatch<AnyAction>,
//     navigate: NavigateFunction
// ) => {
//     dispatch(authActions.loginStart());
//     try {
//         const response = await axiosClient.post<ResponseAPIType<UserType>>(
//             '/auth/login',
//             data
//         );
//         dispatch(authActions.loginSuccess(response));
//         navigate('/blog');
//     } catch (error) {
//         dispatch(authActions.loginFailed());
//     }
// };

// export const handleLogoutUser = async (
//     id: number,
//     dispatch: Dispatch<AnyAction>,
//     navigate: NavigateFunction
// ) => {
//     dispatch(authActions.logoutStart());

//     try {
//         await axiosClient.post('/auth/logout', { id: id });
//         dispatch(authActions.logoutSuccess());
//         navigate('/');
//     } catch (error) {
//         dispatch(authActions.logoutFailed());
//     }
// };

// export const handleUpdateUser = async (
//     data: DataUpdateType,
//     dispatch: Dispatch<AnyAction>
// ) => {
//     dispatch(authActions.updateUserStart());

//     try {
//         const { accessToken, ...other } = data;
//         const response = await axiosClient.post<ResponseAPIType<UserType>>(
//             '/users/update',
//             { ...other },
//             {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                     'Content-Type': 'multipart/form-data',
//                 },
//             }
//         );
//         dispatch(
//             authActions.updateUserSuccess({
//                 ...response,
//                 data: { ...response.data, accessToken: accessToken },
//             })
//         );
//     } catch (error) {
//         dispatch(authActions.updateUserFail());
//     }
// };

// export const handleRegister = () => {};
