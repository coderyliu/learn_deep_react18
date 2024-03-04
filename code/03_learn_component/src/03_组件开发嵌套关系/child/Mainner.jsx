import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MainProduct from "./MainProduct";

export class Mainner extends Component {
  render() {
    return (
      <div>
        <MainBanner></MainBanner>
        <MainProduct></MainProduct>
      </div>
    );
  }
}

export default Mainner;
