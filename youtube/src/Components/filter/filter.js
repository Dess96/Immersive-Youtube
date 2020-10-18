import React, {useState} from 'react';
import List from '../list/list'
import GetVideos from '../../Hooks/getVideos';

const Filter = () => {
    const videos = GetVideos();
    return (
        <div>
            {
                videos.map((item) => 
                <List id={item.id} title={item.title} description={item.description} poster={item.poster}/>)
            }
        </div>
    );
}

export default Filter;