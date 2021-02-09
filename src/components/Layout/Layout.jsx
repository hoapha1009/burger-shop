import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.scss';

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className="content">{props.children}</main>
        </Aux>
    );
};

export default Layout;
