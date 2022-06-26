import {PostsAction, PostsActionTypes} from "../../types/types";
import {Dispatch} from "redux";


export const fetchPosts = ():PostsAction => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2')
                .then(data=>data.json())
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response})
        } catch (e) {
            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR,
                payload: 'Ошибка загрузки постов'
            })
        }
    }
}

export const deletePostAC = (): PostsAction => ({type: PostsActionTypes.DELETE_POST})
export const openDeleteModalAC = (payload:number): PostsAction => ({type: PostsActionTypes.OPEN_DELETE_MODAL, payload})
export const openChangeModalAC = (id:number, title:string, body:string): PostsAction => ({type: PostsActionTypes.OPEN_CHANGE_MODAL, id, title, body})
export const closeDeleteModalAC = (): PostsAction => ({type: PostsActionTypes.CLOSE_DELETE_MODAL})
export const closeChangeModalAC = (): PostsAction => ({type: PostsActionTypes.CLOSE_CHANGE_MODAL})
export const changeCurrentTitleAC = (payload: string):PostsAction => ({type: PostsActionTypes.CHANGE_CURRENT_TITLE, payload})
export const changeCurrentBodyAC = (payload: string):PostsAction => ({type: PostsActionTypes.CHANGE_CURRENT_BODY, payload})
export const changePostAC = ():PostsAction => ({type: PostsActionTypes.CHANGE_POST})