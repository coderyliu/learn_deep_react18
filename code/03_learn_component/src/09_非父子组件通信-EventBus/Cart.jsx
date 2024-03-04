import React, { Component } from "react";
import eventBus from "./utils/eventBus";

export class Cart extends Component {
  componentDidMount() {
    eventBus.on("info", (name, age, height) => {
      console.log(name, age, height);
    });
  }

  render() {
    return (
      <div>
        <h2>Cart</h2>
      </div>
    );
  }
}

export default Cart;
