import React, {FC} from 'react';


interface PostCardProps {
    post: {
        id: number,
        title: string,
        body: string,
        userId?: number
    }
}



const PostCard:FC<PostCardProps> = ({post}) => {
    const {id, title, body} = post
    return (
        <div>
            <h1>{id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostCard;