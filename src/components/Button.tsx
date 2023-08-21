import React from 'react';
import '../assets/styles/button.scss';

function Button(props: { text: string }) {
    return (
        <button className='button'>{props.text}</button>
    )
}

export default Button