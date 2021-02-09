import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import CustomButton from '../../UI/CustomButton/CustomButton';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
                {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Aux>
            <div>
                <h3>Your Order:</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <b>Total price: {props.totalPrice.toFixed(2)}</b>
                </p>
                <p>Continue to checkout?</p>
                <CustomButton btnType="Danger" clicked={props.canceledPurchase}>
                    CANCEL
                </CustomButton>
                <CustomButton
                    btnType="Success"
                    clicked={props.continuedPurchase}
                >
                    CONTINUE
                </CustomButton>
            </div>
        </Aux>
    );
};

export default OrderSummary;
