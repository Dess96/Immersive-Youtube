import React, {useState, useEffect} from 'react';
import GetVideos from '../../Hooks/getVideos';
import List from '../list/list';
import Input from '../input/input';

const Main = () => {
    const videos = GetVideos();
    
    return (
        <div>
        <Input type={'text'} placeholder={'search videos'}/>
        {
            videos.map((item) => 
            <List id={item.id} title={item.title} description={item.description} poster={item.poster}/>)
        }
        </div>
    );
}

export default Main;