import React from 'react';
import List from '../list/list'
import GetVideos from '../../Hooks/getVideos';

const videoList = () => {
    const videos = GetVideos();
    return (
        videos ?
        <div>
            {
                videos.map((item) => 
                <List id={item.id} title={item.title} description={item.description} poster={item.poster}/>)
            }
        </div>
        : <div></div>
    );
}

export default videoList;