import React, {FC} from 'react';
import './ChangeModal.scss'


interface ChangeModalProps {
    currentBody: string
    currentTitle: string
    closeChangeModal: () => void
    changePost: ()=>void
    changeCurrentBody: (body:string)=>void
    changeCurrentTitle: (title:string)=>void
}

const ChangeModal: FC<ChangeModalProps> = ({currentBody, currentTitle, closeChangeModal, changePost, changeCurrentBody, changeCurrentTitle}) => {

    return (
        <div className={'change-modal-background'}>
            <div className={'change-modal-window'}>
                <h1>ИЗМЕНИТЬ ЭТОТ ПОСТ</h1>
                <textarea value={currentTitle} onChange={e=>changeCurrentTitle(e.target.value as string)}/>
                <br/>
                <textarea value={currentBody} onChange={e=>changeCurrentBody(e.target.value)}/>
                <br/>
                <button onClick={changePost}>CHANGE</button>
                <button onClick={closeChangeModal}>CANCEL</button>
            </div>
        </div>
    );
};

export default ChangeModal;