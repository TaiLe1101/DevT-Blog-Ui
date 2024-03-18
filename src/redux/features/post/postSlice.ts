import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreatePostPayload, DeletePostPayload } from '~/api/postApi';
import { PostModel } from '~/models';

interface Init {
    isLoading: boolean;
    posts?: PostModel[];
}

const initialState: Init = {
    isLoading: false,
    posts: undefined,
};

export interface PayloadUpdatePost {}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts(state) {
            state.isLoading = true;
        },
        getPostsSuccess(state, action: PayloadAction<PostModel[]>) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.isLoading = false;
        },

        createPost(state, action: PayloadAction<CreatePostPayload>) {
            state.isLoading = true;
        },
        createPostSuccess(state, action: PayloadAction<PostModel>) {
            state.isLoading = false;
            state.posts?.push(action.payload);
        },
        createPostFailed(state) {
            state.isLoading = false;
        },

        deletePost(state, action: PayloadAction<DeletePostPayload>) {
            state.isLoading = true;
        },
        deletePostSuccess(state, action: PayloadAction<DeletePostPayload>) {
            state.isLoading = false;
            state.posts = state.posts?.filter(
                (post) => post.id !== action.payload.id
            );
        },
        deletePostError(state) {
            state.isLoading = false;
        },
    },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
