import React from 'react';
import Image from '../image/image';

const List = ({id, title, description, poster}) => {
    return (
        <div>
            <li key={id}>{title}
            <br></br>{description}
            <br></br><Image source={poster}/></li> 
        </div>
    )
}

export default List;