import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import PostCard from "../PostCard/PostCard";
import DeleteModal from "../DeleteModal/DeleteModal";
import ChangeModal from "../ChangeModal/ChangeModal";
import {
    changeCurrentBodyAC,
    changeCurrentTitleAC,
    changePostAC,
    closeChangeModalAC,
    closeDeleteModalAC,
    deletePostAC,
    fetchPosts,
    openChangeModalAC,
    openDeleteModalAC
} from "../../store/action-creators/posts";



const PostsList: FC = () => {
    const {
        posts,
        loading,
        error,
        isDeleteModalOpen,
        isChangeModalOpen,
        currentBody,
        currentTitle
    } = useTypedSelector(state => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const openDeleteModal = (id: number) => {
        dispatch(openDeleteModalAC(id))
    }

    const closeDeleteModal = () => {
        dispatch(closeDeleteModalAC())
    }

    const deletePost = () => {
        dispatch(deletePostAC())
    }

    const closeChangeModal = () => {
        dispatch(closeChangeModalAC())
    }

    const openChangeModal = (id: number, title:string, body:string) => {
        dispatch(openChangeModalAC(id, title, body))
    }

    const changePost = () => {
        dispatch(changePostAC())
    }

    const changeCurrentTitle = (title: string) => {
        dispatch(changeCurrentTitleAC(title))
    }

    const changeCurrentBody = (body: string) => {
        dispatch(changeCurrentBodyAC(body))
    }

    if (loading) {
        return <h1>LOADING...</h1>
    }
    if (error) {
        return <h1>ERROR TO FETCH POSTS!</h1>
    }
    return (
        <div>
            {posts.map(post => <PostCard key={post.id} post={post}
                                         openDeleteModal={openDeleteModal}
                                         openChangeModal={openChangeModal}/>)}

            {isDeleteModalOpen ? <DeleteModal
                closeDeleteModal={closeDeleteModal}
                deletePost={deletePost}/> : null}

            {isChangeModalOpen ? <ChangeModal currentBody={currentBody}
                                              currentTitle={currentTitle}
                                              changePost={changePost}
                                              changeCurrentTitle={changeCurrentTitle}
                                              changeCurrentBody={changeCurrentBody}
                                              closeChangeModal={closeChangeModal}/> : null}
        </div>
    );
};

export default PostsList;