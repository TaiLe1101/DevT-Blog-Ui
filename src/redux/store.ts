import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../pages/Login/AuthSlice';
import SidebarSlice from '~/layouts/UserLayout/components/Sidebar/SidebarSlice';

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        sidebar: SidebarSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ActionType<T> = {
    payload: T;
    type: string;
};
