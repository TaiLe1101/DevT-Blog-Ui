import { createSlice } from '@reduxjs/toolkit';
import { ActionType } from '~/redux/store';

interface SidebarActionType {
    id: number;
}

const initialState: SidebarActionType = {
    id: 0,
};

export const SidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        changeNav(state, action: ActionType<SidebarActionType>) {
            state.id = action.payload.id;
        },
    },
});

export const { changeNav } = SidebarSlice.actions;

export default SidebarSlice.reducer;
