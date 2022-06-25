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