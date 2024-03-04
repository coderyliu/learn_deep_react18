import React, { PureComponent } from "react";

// todo 使用styled-components
import { HomeWrapper, HomeButtonWrapper } from "./style";

export class Home extends PureComponent {
  constructor() {
    super();

    this.state = {
      color: "orange",
      size: 40,
    };
  }

  render() {
    const { color, size } = this.state;

    return (
      <HomeWrapper color={color} size={size}>
        <div className="top">
          <span className="title">你好啊，李银河</span>
        </div>
        <div className="bottom">
          <h2 className="title">轮播数据</h2>
          <ul className="banner">
            <li className="item">轮播图01</li>
            <li className="item">轮播图02</li>
            <li className="item">轮播图03</li>
            <li className="item">轮播图04</li>
          </ul>
        </div>

        <HomeButtonWrapper onClick={() => this.setState({ size: size + 2 })}>
          更改大小
        </HomeButtonWrapper>
      </HomeWrapper>
    );
  }
}

export default Home;
