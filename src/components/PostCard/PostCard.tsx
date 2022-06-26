import React, {FC} from 'react';
import Button, {ButtonType} from "../UI/Button/Button";
import './PostCard.scss'

interface PostCardProps {
    post: {
        id: number,
        title: string,
        body: string,
        userId?: number
    }
    openDeleteModal: (id: number) => void
    openChangeModal: (id: number, title: string, body: string) => void
}

const PostCard: FC<PostCardProps> = ({post, openDeleteModal, openChangeModal}) => {
    const {id, title, body} = post
    return (
        <div className={'post-card'}>
            <h3 className={'post-card--title'}>{title}</h3>
            <p className={'post-card--body'}>{body}</p>
            <div className={'post-card--btns'}>
                <Button onClick={() => openChangeModal(id, title, body)}>CHANGE</Button>
                <Button type={ButtonType.danger} onClick={() => openDeleteModal(id)}>DELETE</Button>
            </div>
        </div>
    );
};

export default PostCard;