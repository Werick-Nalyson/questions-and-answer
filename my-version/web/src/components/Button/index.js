import React from 'react';

import './styles.css';

function Button (props) {
    return (
        <button type={props.title} className={`text-white button ${props.className}`}>{props.name}</button>
    )
}

export default Button;