import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import PostCard from "../PostCard/PostCard";
import DeleteModal from "../DeleteModal/DeleteModal";
import ChangeModal from "../ChangeModal/ChangeModal";
import {useActions} from "../../hooks/useActions";
import './Postlist.scss'


const PostsList: FC = () => {
    const {
        posts,
        loading,
        error,
        isDeleteModalOpen,
        isChangeModalOpen,
        currentBody,
        currentTitle,
    } = useTypedSelector(state => state.posts)

    const {
        fetchPosts,
        openChangeModalAC,
        openDeleteModalAC,
        deletePostAC,
        closeChangeModalAC,
        closeDeleteModalAC,
        changePostAC,
        changeCurrentBodyAC,
        changeCurrentTitleAC
    } = useActions()

    useEffect(() => {
        fetchPosts()
    }, [])

    const openDeleteModal = (id: number) => {
        openDeleteModalAC(id)
    }
    const closeDeleteModal = () => {
        closeDeleteModalAC()
    }
    const deletePost = () => {
        deletePostAC()
    }
    const closeChangeModal = () => {
        closeChangeModalAC()
    }
    const openChangeModal = (id: number, title: string, body: string) => {
        openChangeModalAC(id, title, body)
    }
    const changePost = () => {
        changePostAC()
    }
    const changeCurrentTitle = (title: string) => {
        changeCurrentTitleAC(title)
    }
    const changeCurrentBody = (body: string) => {
        changeCurrentBodyAC(body)
    }

    if (loading) {
        return <h1>LOADING...</h1>
    }
    if (error) {
        return <h1>ERROR TO FETCH POSTS!</h1>
    }
    return (
        <div className={'post-list'}>
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