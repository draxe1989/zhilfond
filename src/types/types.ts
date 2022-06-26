export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',

    OPEN_DELETE_MODAL = 'OPEN_DELETE_MODAL',
    CLOSE_DELETE_MODAL = 'CLOSE_DELETE_MODAL',
    DELETE_POST = 'DELETE_POST',

    OPEN_CHANGE_MODAL = 'OPEN_CHANGE_MODAL',
    CLOSE_CHANGE_MODAL = 'CLOSE_CHANGE_MODAL',

    CHANGE_CURRENT_TITLE = 'CHANGE_CURRENT_TITLE',
    CHANGE_CURRENT_BODY = 'CHANGE_CURRENT_BODY',
    CHANGE_POST = 'CHANGE_POST',
}

interface ChangeCurrentBodyAction {
    type: PostsActionTypes.CHANGE_CURRENT_BODY,
    payload: string
}

interface ChangeCurrentTitleAction {
    type: PostsActionTypes.CHANGE_CURRENT_TITLE,
    payload: string
}

interface ChangePostAction {
    type: PostsActionTypes.CHANGE_POST
}

interface OpenChangeModalAction {
    type: PostsActionTypes.OPEN_CHANGE_MODAL,
    id:number,
    title: string,
    body:string
}

interface CloseChangeModalAction {
    type: PostsActionTypes.CLOSE_CHANGE_MODAL,

}

interface OpenDeleteModalAction {
    type: PostsActionTypes.OPEN_DELETE_MODAL,
    payload: number
}

interface CloseDeleteModalAction {
    type: PostsActionTypes.CLOSE_DELETE_MODAL,
}

interface DeletePostAction {
    type: PostsActionTypes.DELETE_POST,
}

interface FetchUsersAction {
    type: PostsActionTypes.FETCH_POSTS;
}

interface FetchUsersSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: any[]
}

interface FetchUsersErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string
}

export type PostsAction =
    CloseDeleteModalAction
    | DeletePostAction
    | OpenDeleteModalAction
    | FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction
    | ChangeCurrentBodyAction
    | ChangeCurrentTitleAction
    | ChangePostAction
    | OpenChangeModalAction
    | CloseChangeModalAction

export interface PostState {
    posts: Post[],
    loading: boolean
    error: null | string,
    isDeleteModalOpen: boolean,
    currentPost: number,
    isChangeModalOpen: boolean,
    currentTitle: string,
    currentBody: string,
}

export interface Post {
    id: number
    title: string
    body: string
}