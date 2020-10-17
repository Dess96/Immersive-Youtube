import React, {useState} from 'react';

const Input = ({type, placeholder}) => {
    const [search, setSearch] = useState('');
    return <div>
        Logo <input type={type} placeholder={placeholder}/>
        <button onClick={() => setSearch()}>search</button>
    </div> 
}

export default Input;