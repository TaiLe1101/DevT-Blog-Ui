import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { CreatePostPayload, DeletePostPayload, postApi } from '~/api';
import { PostModel } from '~/models';
import { ResponseAPIType } from '~/types/api.type';
import { postActions } from './postSlice';

function* handleGetPosts() {
    try {
        const res: ResponseAPIType<PostModel[]> = yield call(postApi.getAll);
        yield put(postActions.getPostsSuccess(res.data));
    } catch (error) {
        yield put(postActions.getPostsFailed());
    }
}

function* handleCreatePost(action: PayloadAction<CreatePostPayload>) {
    try {
        const res: ResponseAPIType<PostModel> = yield call(
            postApi.createPost,
            action.payload
        );
        toast.success('Tạo bài viết thành công 😍');
        yield put(postActions.createPostSuccess(res.data));
    } catch (error) {
        toast.error('Tạo bài viết thất bại 🥲');
        yield put(postActions.createPostFailed());
    }
}

function* handleDeletePost(action: PayloadAction<DeletePostPayload>) {
    try {
        yield call(postApi.delete, action.payload);
        toast.success('Xóa bài viết thành công 😍');
        yield put(postActions.deletePostSuccess(action.payload));
    } catch (error) {
        toast.error('Xóa bài viết thất bại 🥲');
        yield put(postActions.deletePostError());
    }
}

function* onLoadPosts() {
    yield takeEvery(postActions.getPosts, handleGetPosts);
}

function* onCreatePost() {
    yield takeEvery(postActions.createPost, handleCreatePost);
}

function* onDeletePost() {
    yield takeEvery(postActions.deletePost, handleDeletePost);
}
export default function* postSaga() {
    yield fork(onLoadPosts);
    yield fork(onCreatePost);
    yield fork(onDeletePost);
}
