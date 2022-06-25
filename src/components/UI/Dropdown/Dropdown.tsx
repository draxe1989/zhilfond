import React, {FC,  useState} from 'react';
import './Dropdown.scss'

const Dropdown: FC = () => {
    const options = [
        '1 OPTION',
        '2 OPTION',
        '3 OPTION',
        '4 OPTION',
        '5 OPTION',
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [select, setSelect] = useState(0)
    const [isFocused, setIsFocused] = useState(false)

    const handleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const handleOption = (e: any, i: number) => {
        e.preventDefault()
        setSelect(i)
        setIsOpen(false)
    }
    const handleFocus = () => {
        setIsFocused(true)

    }


    const handleBlur = () => {
        setIsFocused(false)
        setIsOpen(false)
    }
    return (
        <div className={'dropdown'}>
            <button
                onClick={handleDropdown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`select`}
            >{options[select]}</button>

            <div className={`options${isOpen ? ' options-open' : ''}`}>
                {options.map((item, i) => <div key={item}
                                               onMouseDown={(e) => handleOption(e, i)}
                                               className={'option'}
                >{item}</div>)}
            </div>
        </div>
    );
};

export default Dropdown;