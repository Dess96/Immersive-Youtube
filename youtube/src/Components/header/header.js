import React, {useState} from 'react';

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

    return (<div>
        <h1>YouTube</h1>
         <input type='text' placeholder='Search videos' onKeyDown={updateData}/>
        <button onClick={() => changeURL(inp)}>search</button>
    </div>);
}

export default Header;