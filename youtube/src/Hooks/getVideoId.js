import React, {useState, useEffect} from 'react';

const GetVideoId = (id) => {
    const [vid, setVid] = useState([]);

    useEffect(() => {
        fetch(`https://bootcamp-users.herokuapp.com/video?id=${id}`)
        .then(resp => resp.json())
        .then(res => {
            console.log(res);
            setVid(res.video);
        }).catch(ex => {
            console.error(ex);
        })
    }, []);
    return vid;
}

export default GetVideoId;