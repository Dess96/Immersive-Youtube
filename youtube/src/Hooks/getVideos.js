import React, {useState, useEffect} from 'react';

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

    return video;
}

export default GetVideos;