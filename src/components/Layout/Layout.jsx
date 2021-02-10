import React from 'react';
import Aux from '../../hoc/Auxiliary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.scss';

class Layout extends React.Component {
    state = {
        showSideDrawer: true,
    };

    closedSideDrawer = () => {
        this.setState({ showSideDrawer: false });
    };

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.closedSideDrawer}
                />
                <main className="Content">{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
