import React, {useState} from 'react';

const Input = ({type, placeholder}) => {
    return (<div>
        Logo <input type={type} placeholder={placeholder}/>
    </div>);
}

export default Input;