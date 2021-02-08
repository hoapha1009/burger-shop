import React from "react";
import "./Modal.scss";

const Modal = (props) => {
    return <div className="Modal">{props.children}</div>;
};

export default Modal;
