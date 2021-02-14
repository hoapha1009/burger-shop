import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/" exact component={BurgerBuilder} />
                        <Route path="/checkout" exact component={Checkout} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}
export default App;
