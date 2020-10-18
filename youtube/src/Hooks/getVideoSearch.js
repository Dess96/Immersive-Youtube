import {useState, useEffect} from 'react';

const GetVideoSearch = (search) => {
    const [vid, setVid] = useState([]);

    useEffect(() => {
        fetch(`https://bootcamp-users.herokuapp.com/videos?search=${search}`)
        .then(resp => resp.json())
        .then(res => {
            setVid(res.videos);
        }).catch(ex => {
            console.error(ex);
        })
    }, [search]);
    return vid;
}

export default GetVideoSearch;