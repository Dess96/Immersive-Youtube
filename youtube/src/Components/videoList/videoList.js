import React from 'react';
import List from '../list/list'
import GetVideos from '../../Hooks/getVideos';
import './videoList.css';

const videoList = () => {
    const videos = GetVideos();
    return (
        videos ?
        <div className="videos">
            <ul>
            {
                videos.map((item) => 
                <List id={item.id} title={item.title} description={item.description} poster={item.poster}/>)
            }
            </ul>
        </div>
        : <div></div>
    );
}

export default videoList;