import React, { PureComponent } from "react";
import { createPortal } from "react-dom";

export class Modal extends PureComponent {
  render() {
    return (
      <div
        className="modal"
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        {createPortal(this.props.children, document.querySelector("#modal"))}
      </div>
    );
  }
}

export default Modal;
