import React, {FC} from 'react';
import './ChangeModal.scss'
import Button, {ButtonType} from "../UI/Button/Button";


interface ChangeModalProps {
    currentBody: string
    currentTitle: string
    closeChangeModal: () => void
    changePost: () => void
    changeCurrentBody: (body: string) => void
    changeCurrentTitle: (title: string) => void
}

const ChangeModal: FC<ChangeModalProps> = ({
                                               currentBody,
                                               currentTitle,
                                               closeChangeModal,
                                               changePost,
                                               changeCurrentBody,
                                               changeCurrentTitle
                                           }) => {

    return (
        <div className={'change-modal-background'}>
            <div className={'change-modal-window'}>
                <h3 className={'change-modal-window--header'}>ИЗМЕНИТЬ ЭТОТ ПОСТ</h3>
                <textarea className={'change-modal-window--textarea'} value={currentTitle}
                          onChange={e => changeCurrentTitle(e.target.value)}/>
                <textarea className={'change-modal-window--textarea'} value={currentBody}
                          onChange={e => changeCurrentBody(e.target.value)}/>
                <div className={'change-modal-window--btns'}>
                    <Button type={ButtonType.success} onClick={changePost}>CHANGE</Button>
                    <Button type={ButtonType.warning} onClick={closeChangeModal}>CANCEL</Button>
                </div>
            </div>
        </div>
    );
};

export default ChangeModal;