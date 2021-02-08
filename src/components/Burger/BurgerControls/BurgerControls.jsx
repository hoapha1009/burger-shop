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
        </div>
    );
};

export default BurgerControls;
