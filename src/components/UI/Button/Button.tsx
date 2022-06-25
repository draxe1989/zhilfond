import {FC, ReactChild, ReactNode} from 'react';
import './Button.scss'

const Button: FC<ButtonProps> = ({
     children,
     onClick,
     min,
     outlined,
     text,
     type = ButtonType.primary,
     block,
     large,
     loading,
     disabled,
}) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`custom-btn ${type}${text?' text':''}${outlined?' outlined':''}${large?' large':''}${min?' min':''}${block?' block':''}`}
        >
                {loading?<div className={'custom-btn_loader'}></div>:children}

        </button>
    );
};

export default Button;

interface ButtonProps {
    children?: ReactNode | ReactChild,
    loading?: boolean,
    onClick?: () => void,
    disabled?: boolean,
    type?: ButtonType,
    min?: boolean,
    large?: boolean,
    block?: boolean,
    outlined?: boolean,
    text?: boolean,
}

export enum ButtonType {
    danger = 'danger',
    success = 'success',
    warning = 'warning',
    primary = 'primary'
}