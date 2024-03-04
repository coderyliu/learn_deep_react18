import React, { Component } from "react";

export class MainProduct extends Component {
  constructor() {
    super();

    this.state = {
      products: ["书籍", "漫画", "小说", "名著"],
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <h2>商品列表</h2>
        <ul>
          {products.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MainProduct;
