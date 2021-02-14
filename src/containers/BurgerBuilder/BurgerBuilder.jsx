import React, { Component } from 'react';
import instance from '../../axios-order';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
    };

    componentDidMount() {
        instance
            .get(
                'https://burger-shop-2fdbb-default-rtdb.firebaseio.com/ingredients.json'
            )
            .then((res) => this.setState({ ingredients: res.data }))
            .catch((err) => this.setState({ error: true }));
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, ele) => sum + ele, 0);
        this.setState({ purchasable: sum > 0 });
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    cancelPurchaseHandler = () => {
        this.setState({ purchasing: false });
    };

    continuePurchaseHandler = () => {
        // alert('You continue!!!');
        // this.setState({ loading: true });
        // const order = {
        //     ingredient: this.state.ingredients,
        //     totalPrice: this.state.totalPrice.toFixed(2),
        //     customer: {
        //         name: 'HoangPham',
        //         country: 'VietNam',
        //         address: 'VietNam',
        //         email: 'test@test.com',
        //     },
        //     deliveryMethod: 'fastest',
        // };
        // instance
        //     .post('/orders.json', order)
        //     .then((res) => this.setState({ loading: false, purchasing: false }))
        //     .catch((err) =>
        //         this.setState({ loading: false, purchasing: false })
        //     );
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(
                encodeURIComponent(i) +
                    '=' +
                    encodeURIComponent(this.state.ingredients[i])
            );
        }
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString,
        });
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients,
        };

        let orderSummary = null;
        let burger = this.state.error ? (
            <p>Ingredients can't be loaded!!!</p>
        ) : (
            <Spinner />
        );
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        totalPrice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    canceledPurchase={this.cancelPurchaseHandler}
                    continuedPurchase={this.continuePurchaseHandler}
                    totalPrice={this.state.totalPrice}
                />
            );
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.cancelPurchaseHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, instance);
