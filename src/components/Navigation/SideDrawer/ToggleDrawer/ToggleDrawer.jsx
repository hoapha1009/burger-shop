import React from 'react';
import PropTypes from 'prop-types';
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

ToggleDrawer.propType = {
    clicked: PropTypes.func,
};

export default ToggleDrawer;
