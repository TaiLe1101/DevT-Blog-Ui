import { all } from 'redux-saga/effects';

import postSaga from './features/post/postSaga';

export default function* rootSaga() {
    yield all([postSaga()]);
}
