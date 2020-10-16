import React, {useState, useEffect} from 'react';
import GetVideos from '../../Hooks/getVideos';
import Input from '../input/input';
import Button from '../button/button';

const Main = () => {
    const videos = GetVideos();
    return <div className="container">
        <Input type={'text'} placeholder={'Search'}/><Button text={'search'}/>
        <ul>{videos}</ul>
    </div> 
}

export default Main;