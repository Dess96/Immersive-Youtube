import React, {useState, useEffect} from 'react';
import GetVideos from '../../Hooks/getVideos';

const Main = () => {
    const videos = GetVideos();

    useEffect(() => {
        console.log('Loaded!');

        console.log(videos);

        return () => console.log('Good Bye!');
    }, []);

    return <h1>{videos}</h1>
}

export default Main;