import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1,
        },
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (const param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ ingredients: ingredients });
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    };

    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    canceledCheckout={this.cancelCheckoutHandler}
                    continuedCheckout={this.continueCheckoutHandler}
                />
            </div>
        );
    }
}

export default Checkout;
