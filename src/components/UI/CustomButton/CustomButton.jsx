import React from 'react';
import './CustomButton.scss';

const CustomButton = (props) => {
    return (
        <button className={`Button ${props.btnType}`} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default CustomButton;
