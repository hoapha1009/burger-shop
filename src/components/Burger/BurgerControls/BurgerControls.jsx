import React from "react";
import "./BurgerControls.scss";
import BurgerControl from "./BurgerControl/BurgerControl";

const BurgerControls = (props) => {
    const controls = [
        { label: "Salad", type: "salad" },
        { label: "Bacon", type: "bacon" },
        { label: "Cheese", type: "cheese" },
        { label: "Meat", type: "meat" },
    ];
    return (
        <div className="BuildControls">
            <p>
                Total price: <b>{props.totalPrice.toFixed(2)}</b>
            </p>
            {controls.map((ctrl) => {
                return (
                    <BurgerControl
                        key={ctrl.type}
                        label={ctrl.label}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemove(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
                );
            })}
            <button disabled={!props.purchasable} className="OrderButton">
                ORDER NOW
            </button>
        </div>
    );
};

export default BurgerControls;
