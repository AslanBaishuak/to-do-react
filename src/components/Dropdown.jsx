import React from 'react';

const Dropdown = (props) => {
    return (
        <select className="category-select" onChange={props.onChange} value={props.value}>
          {props.options.map( (option, index) => (
            <option value={option.value} key={index}>{option.value}</option>
          ))}
        </select>
    )
}

export default Dropdown;