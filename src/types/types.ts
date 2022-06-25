export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface FetchUsersAction {
    type: PostsActionTypes.FETCH_POSTS;
}

interface FetchUsersSuccesAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: any[]
}

interface FetchUsersErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string
}

export type PostsAction = FetchUsersAction | FetchUsersSuccesAction | FetchUsersErrorAction | any

export interface PostState {
    posts: any[],
    loading: boolean
    error: null | string
}