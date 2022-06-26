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

const ChangeModal: FC<ChangeModalProps> = (
    {
        currentBody,
        currentTitle,
        closeChangeModal,
        changePost,
        changeCurrentBody,
        changeCurrentTitle
    }) => {

    let isChangeButtonDisabled = currentBody.length < 1 || currentTitle.length < 1
    return (
        <div className={'change-modal-background'}>
            <div className={'change-modal-window'}>
                <h3 className={'change-modal-window--header'}>ИЗМЕНИТЬ ЭТОТ ПОСТ</h3>
                <textarea className={'change-modal-window--textarea'} value={currentTitle}
                          onChange={e => changeCurrentTitle(e.target.value)}/>
                <textarea className={'change-modal-window--textarea'} value={currentBody}
                          onChange={e => changeCurrentBody(e.target.value)}/>
                {isChangeButtonDisabled && <p>Для сохранения поста все поля должны быть заполнены</p>}
                <div className={'change-modal-window--btns'}>
                    <Button type={ButtonType.success} disabled={isChangeButtonDisabled} onClick={changePost}>SAVE</Button>
                    <Button type={ButtonType.warning} onClick={closeChangeModal}>CANCEL</Button>
                </div>
            </div>
        </div>
    );
};

export default ChangeModal;