import React from 'react';
import Image from '../image/image';
import './list.css';

const List = ({id, title, description, poster}) => {
    return (
        <div>
            <li key={id}>{title}
            <br></br><div className="desc">{description}</div>
            <Image source={poster}/></li> 
        </div>
    )
}

export default List;