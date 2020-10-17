import React, {useState} from 'react';
import List from '../list/list'
import GetVideos from '../../Hooks/getVideos';

const Filter = () => {
    var videos = GetVideos();
    //console.log(videos)

    const filter = () => {
        videos = videos.filter(item => item.title.toLowerCase().includes('vance'));
        console.log(videos);
    }

    return (
        <div>
            <button onClick={filter}>search</button>
            {console.log(videos)}
        </div>
    );
}

export default Filter;