import React, {useState} from 'react';
import './header.css';

import {
    useHistory
} from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const [inp, setInp] = useState('');

    const updateData = (event) => {
        setInp(event.target.value)
    }

    const changeURL = (inp) => {
        history.push(`/search/${inp}`);
    }

    return (
        <header>
            <h1>YouTube</h1>
            <div className="inputDiv">
                <input type='text' placeholder='Search videos' onKeyDown={updateData}/>
                <button onClick={() => changeURL(inp)}>search</button>
            </div>
        </header>
    );
}

export default Header;