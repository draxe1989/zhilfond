import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../../store/action-creators/posts";
import PostCard from "../PostCard/PostCard";


const PostsList: FC = () => {
    const {posts, loading, error} = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchPosts())
    },[])

    if (loading) {
        return <h1>LOADING</h1>
    }
    if (error) {
        return <h1>ERROR</h1>
    }

    return (
        <div>
            {posts.map(post=><PostCard key={post.id} post={post}/>)}

        </div>
    );
};

export default PostsList;