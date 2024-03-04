import React, { Component } from "react";
import NavBar from "./nav-bar";

// ?在react中我们也可以通过props的函数调用来实现作用域插槽
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

  getItem(item) {
    if (item === "新款") {
      return <span>{item}</span>;
    } else if (item === "流行") {
      return <button>{item}</button>;
    } else {
      return <span>{item}</span>;
    }
  }

  render() {
    const { tabBar, tabIndex } = this.state;

    return (
      <div>
        <NavBar
          tabBar={tabBar}
          tabToggle={(index) => this.renderCom(index)}
          // 传递props决定子组件展示的元素
          // tabItem={item=><button>{item}</button>}

          // 由子组件回调父组件函数函数来决定展示内容
          tabItem={(item) => this.getItem(item)}
        ></NavBar>
        <h2>{tabBar[tabIndex]}</h2>
      </div>
    );
  }
}

export default App;
