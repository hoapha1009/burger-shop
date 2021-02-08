import React from "react";
import Aux from "../../hoc/Auxiliary";
import "./Layout.scss";

const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="content">{props.children}</main>
        </Aux>
    );
};

export default Layout;
