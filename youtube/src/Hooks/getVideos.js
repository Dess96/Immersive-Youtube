import React, {useState, useEffect} from 'react';
import Image from '../Components/image/image';

const GetVideos = () => {
    const [video, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://bootcamp-users.herokuapp.com/videos`)
        .then(resp => resp.json())
        .then(res => {
            setVideos(res.videos);
        }).catch(ex => {
            console.error(ex);
        })
    }, []);

    return video.map((item) => <li key={item.id}>{item.title}
        <br></br>{item.description}
        <br></br><Image source={item.poster}/></li> );
}

export default GetVideos;