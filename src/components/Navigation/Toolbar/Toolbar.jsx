import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleDrawer from '../SideDrawer/ToggleDrawer/ToggleDrawer';
import './Toolbar.scss';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <ToggleDrawer clicked={props.toggleSideDrawer} />
            <div className="Logo">
                <Logo />
            </div>
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;
