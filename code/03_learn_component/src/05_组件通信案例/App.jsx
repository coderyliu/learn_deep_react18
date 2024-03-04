import React, { Component } from "react";
import NavBar from "./nav-bar";

// todo 简单做一个案例，tabbar的切换
// todo 来巩固父子组件通过props来实现父子组件之间的通信方式，并通过prop-types做类型约束
// todo 在react中依然使用的是flow来做的类型约束
// todo 通过props来实现父子组件通信
export class App extends Component {
  constructor() {
    super();

    this.state = {
      tabBar: ["新款", "流行", "热门"],
      tabIndex: 0,
    };
  }

  renderCom(index) {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabBar, tabIndex } = this.state;

    const renderCom = (index) => {
      this.setState({
        tabIndex: index,
      });
      console.log("end");
    };
    console.log("first", tabIndex);

    return (
      <div>
        <NavBar
          tabBar={tabBar}
          tabToggle={(index) => renderCom(index)}
        ></NavBar>
        <h2>{tabBar[tabIndex]}</h2>
      </div>
    );
  }
}

export default App;
