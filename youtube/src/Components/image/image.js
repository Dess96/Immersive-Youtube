import React, {useState} from 'react';

const Image = ({source}) => {
    const [data] = useState(source);
    return <img src={data}/>
}

export default Image;