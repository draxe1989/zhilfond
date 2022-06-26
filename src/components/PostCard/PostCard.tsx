import React, {FC} from 'react';

interface PostCardProps {
    post: {
        id: number,
        title: string,
        body: string,
        userId?: number
    }
    openDeleteModal: (id:number)=>void
    openChangeModal: (id:number, title:string, body:string)=>void
}

const PostCard: FC<PostCardProps> = ({post, openDeleteModal, openChangeModal}) => {
    const {id, title, body} = post
    return (
        <div>
            <h1>{id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={()=>openChangeModal(id, title, body)}>CHANGE</button>
            <button onClick={()=>openDeleteModal(id)}>DELETE</button>
        </div>
    );
};

export default PostCard;