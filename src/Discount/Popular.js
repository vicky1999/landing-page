import React from 'react';

import './Discount.css';

const Popular = (props) => {

    const background = props.background ? props.background : 'red';
    const textColor = props.textColor ? props.textColor : 'white';

    const popularContainerStyle = {
        width: '75%',
        marginLeft: 'auto',
        right: '0',
        bottom: '5rem',
        border: `8px solid ${background}`,
        borderRight: '0',
        borderLeft: '10px solid transparent',
        height: '0',
        lineHeight: '0',
        color: `${textColor}`,
        zIndex: '1'
    }


    return (
        <div className='popular-container' style={popularContainerStyle}>
            <div>{props.text}</div>
        </div>
    )
}

export default Popular;