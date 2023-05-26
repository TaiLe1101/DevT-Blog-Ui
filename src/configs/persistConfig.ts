import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '~/pages/Login/AuthSlice';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
