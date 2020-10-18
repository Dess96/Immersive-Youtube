import React from 'react';
import List from '../list/list'
import GetVideoId from '../../Hooks/getVideoId';

import {
    useParams
} from "react-router-dom";

const IdVideo = () => {
    let {id} = useParams();
    const videos = GetVideoId(id);

    return (
        videos ? 
        <div>
            {
                <List id={videos.id} title={videos.title} description={videos.description} poster={videos.poster}/>
            }
        </div>
        : <div></div>
    );
}

export default IdVideo;