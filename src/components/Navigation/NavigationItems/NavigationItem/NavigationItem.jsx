import React from 'react';
import './NavigationItem.scss';

const NavigationItem = (props) => {
    return (
        <li className="NavigationItem">
            <a
                href={props.children}
                target="_blank"
                rel="noreferrer"
                className={props.active ? `active` : null}
            >
                {props.children}
            </a>
        </li>
    );
};

export default NavigationItem;
