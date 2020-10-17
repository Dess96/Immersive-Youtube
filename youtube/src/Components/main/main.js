import React, {useState, useEffect} from 'react';
import GetVideos from '../../Hooks/getVideos';
import Filter from '../filter/filter';

const Main = () => {
    return (
        <div>
            <Filter/>
        </div>
    );
}

export default Main;