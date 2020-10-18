import React, {useState} from 'react';

const Image = ({source}) => {
    const [data] = useState(source);
    return <img src={data} alt='thumbnail'/>
}

export default Image;