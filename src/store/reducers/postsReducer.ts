import {PostsAction, PostsActionTypes, PostState} from "../../types/types";

const defaultState: PostState = {
    posts: [],
    loading: false,
    error: null,
    isDeleteModalOpen: false,
    currentPost: 0,
    isChangeModalOpen: false,
    currentBody: '',
    currentTitle: ''
}


export const postsReducer = (state = defaultState, action: PostsAction): PostState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {...state, loading: true}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, posts: action.payload, loading: false}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostsActionTypes.OPEN_DELETE_MODAL:
            return {...state, isDeleteModalOpen: true, currentPost: action.payload}
        case PostsActionTypes.CLOSE_DELETE_MODAL:
            return {...state, isDeleteModalOpen: false, currentPost: 0}
        case PostsActionTypes.DELETE_POST:
            const newState = {...state, isDeleteModalOpen: false}
            newState.posts = [...state.posts].filter(post=>post.id !== state.currentPost)
            return newState
        case PostsActionTypes.OPEN_CHANGE_MODAL:
            return {...state, isChangeModalOpen: true, currentPost: action.id, currentBody:action.body, currentTitle: action.title}
        case PostsActionTypes.CLOSE_CHANGE_MODAL:
            return {...state, isChangeModalOpen: false, currentPost: 0}
        case PostsActionTypes.CHANGE_CURRENT_TITLE:
            return {...state, currentTitle: action.payload}
        case PostsActionTypes.CHANGE_CURRENT_BODY:
            return {...state, currentBody: action.payload}
        case PostsActionTypes.CHANGE_POST:
            const changePost = ():PostState=>{
                const newState = {...state, isChangeModalOpen: false}
                newState.posts = [...state.posts]
                for (const item of newState.posts) {
                    if(item.id === state.currentPost) {
                        item.title = state.currentTitle
                        item.body = state.currentBody
                    }
                }
                return newState
            }
            return changePost()
        default:
            return state
    }
}