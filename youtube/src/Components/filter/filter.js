import React from 'react';
import List from '../list/list'
import GetVideoSearch from '../../Hooks/getVideoSearch';
import './filter.css';

import {
    useParams
} from "react-router-dom";

const Search = () => {
    let {search} = useParams();
    const videos = GetVideoSearch(search);

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

export default Search;