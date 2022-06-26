import React, {FC} from 'react';

interface ChangeAreaProps {
    value: string,
    changeArea: (value:string)=>void
}

const ChangeArea:FC<ChangeAreaProps> = ({value, changeArea}) => {

    return <div>
        <textarea value={value} onChange={event => changeArea(event.target.value)} />
    </div>;
};

export default ChangeArea;