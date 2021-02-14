import React from 'react';
import Burger from '../../Burger/Burger';
import CustomButton from '../../UI/CustomButton/CustomButton';
import './CheckoutSummary.scss';

const CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!!!</h1>
            <div className="" style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <CustomButton btnType="Danger" clicked={props.canceledCheckout}>
                CANCEL
            </CustomButton>
            <CustomButton btnType="Success" clicked={props.continuedCheckout}>
                CONTINUE
            </CustomButton>
        </div>
    );
};

export default CheckoutSummary;
