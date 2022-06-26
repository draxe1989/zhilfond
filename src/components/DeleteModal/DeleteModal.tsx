import React, {FC} from 'react';
import './DeleteModal.scss'
import Button, {ButtonType} from "../UI/Button/Button";

interface DeleteModalProps {
    closeDeleteModal: () => void
    deletePost: () => void
}

const DeleteModal: FC<DeleteModalProps> = ({closeDeleteModal, deletePost}) => {
    return (
        <div className={'delete-modal-background'}>
            <div className={'delete-modal-window'}>
                <h3 className={'delete-modal-window--header'}>Удалить этот пост?</h3>
                <div className={'delete-modal-window--btns'}>
                    <Button type={ButtonType.danger} onClick={deletePost}>DELETE</Button>
                    <Button type={ButtonType.warning} onClick={closeDeleteModal}>CANCEL</Button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;