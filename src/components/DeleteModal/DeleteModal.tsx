import React, { FC } from 'react';
import './DeleteModal.scss'

interface DeleteModalProps {
    closeDeleteModal: ()=>void
    deletePost: ()=>void
}

const DeleteModal: FC<DeleteModalProps> = ({closeDeleteModal, deletePost}) => {
    return (
        <div className={'delete-modal-background'}>
            <div className={'delete-modal-window'}>
                <h1>Удалить этот пост?</h1>
                <button onClick={deletePost}>DELETE</button>
                <button onClick={closeDeleteModal}>CANCEL</button>
            </div>
        </div>
    );
};

export default DeleteModal;