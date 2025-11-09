import React from 'react';

const Input = ({backgroundColor, fontSize, placeholder, value, onChange, className}) => {

    return (
        <input 
            value={value}
            onChange={onChange}
            type="text" 
            placeholder={placeholder} 
            style={{background: backgroundColor, fontSize: fontSize}} 
            className={className}
        />
    );
}




export default Input;
