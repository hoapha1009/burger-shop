import React from "react";
import "./BurgerControl.scss";

const BurgerControl = (props) => {
    return (
        <div className="BuildControl">
            <label className="Label">{props.label}</label>
            <button
                className="Less"
                onClick={props.removed}
                disabled={props.disabled}
            >
                Less
            </button>
            <button className="More" onClick={props.added}>
                More
            </button>
        </div>
    );
};

export default BurgerControl;
