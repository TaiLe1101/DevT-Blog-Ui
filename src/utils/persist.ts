import { AuthState } from '~/redux/features/auth';

/* eslint-disable import/no-anonymous-default-export */
export interface Persist {
    version: number;
    rehydrated: boolean;
}

export interface PersistLocalStorageType {
    auth: string;
    _persist: string;
}

const persistRoot: PersistLocalStorageType = JSON.parse(
    localStorage.getItem('persist:root') as string
);

export const persistLocalStorage = {
    getAuth(): AuthState {
        return JSON.parse(persistRoot.auth);
    },

    getPersist(): Persist {
        return JSON.parse(persistRoot._persist);
    },
};
