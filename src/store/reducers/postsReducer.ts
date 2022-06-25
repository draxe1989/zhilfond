import {PostsAction, PostsActionTypes, PostState} from "../../types/types";

const defaultState: PostState = {
    posts: [],
    loading: false,
    error: null,
}


export const postsReducer = (state = defaultState, action: PostsAction): PostState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {posts: [], loading: true, error: null}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {posts: action.payload, loading: false, error: null}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {posts: [], loading: false, error: action.payload}
        default:
            return state
    }
}