import React, { Component } from "react";
import PropTypes from "prop-types";

export class MainProduct extends Component {
  // ?子组件接受props
  constructor(props) {
    super(props);
    // ?也可以是这样
    // this.props=props

    this.state = {
      products: ["书籍", "漫画", "小说", "名著"],
    };
  }

  render() {
    // const {products}=this.state

    // todo 拿到props中的值
    console.log(this.props);
    const { products } = this.props;

    return (
      <div>
        <h2>商品列表</h2>
        <ul>
          {products.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// ?对prop中的属性做一下限制
MainProduct.propTypes = {
  products: PropTypes.array,
};

// ?对prop中的属性设置默认值
MainProduct.defaultProps = {
  products: ["哈哈哈", "呵呵呵", "嘻嘻嘻"],
};

export default MainProduct;
