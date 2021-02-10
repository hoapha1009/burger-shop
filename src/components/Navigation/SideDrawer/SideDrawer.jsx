import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';

const SideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={`SideDrawer ${props.open ? `Open` : `Close`}`}>
                <div className="SideDrawer-Logo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;
