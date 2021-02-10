import React from 'react';
import './Logo.scss';

import logoBurger from '../../assets/images/28.1 burger-logo.png.png';

const Logo = (props) => {
    return (
        <div className="Logo">
            <img src={logoBurger} alt="logo-burger" />
        </div>
    );
};

export default Logo;
