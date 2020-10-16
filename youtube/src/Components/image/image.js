import React, {useState, useEffect} from 'react';

const Image = ({source}) => {
    const [data] = useState(source);
    return <img src={data}/>
}

export default Image;