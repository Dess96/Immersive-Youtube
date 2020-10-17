import React, {useState, useEffect} from 'react';
import GetVideos from '../../Hooks/getVideos';
import Input from '../input/input';
import Button from '../button/button';
import Image from '../image/image';

const Main = () => {
    const videos = GetVideos();
    return videos.map((item) => 
        <div>
            <li key={item.id}>{item.title}
            <br></br>{item.description}
            <br></br><Image source={item.poster}/></li> 
        </div>);
}

export default Main;