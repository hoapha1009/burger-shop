import React from 'react';
import './ToggleDrawer.scss';

const ToggleDrawer = (props) => {
    return (
        <div className="DrawerToggle" onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default ToggleDrawer;
