import React, {useState, useEffect} from 'react';
import GetVideos from '../../Hooks/getVideos';

const Main = () => {
    const video = GetVideos();
    useEffect(() => {
        return () => console.log('Good Bye!');
    });

    return <h1>{video}</h1>
}

export default Main;