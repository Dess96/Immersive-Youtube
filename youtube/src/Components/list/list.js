import React, {useState} from 'react';
import Image from '../image/image';

const List = ({data}) => {
    return (
        <div>
        {
           // <li>{videos.title}</li>
            data.map((item) => 
            <List id={item.id} title={item.title} description={item.description} poster={item.poster}/>)
        }
        </div>
    );
}

export default List;