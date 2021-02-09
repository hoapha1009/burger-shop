import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.scss';

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <div className="">MENU</div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;
