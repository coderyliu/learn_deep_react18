import React, { Component } from "react";
import eventBus from "./utils/eventBus";
import Cart from "./Cart";
import Home from "./Home";

// ?非父子组件的通信我们可以借助事件总线eventBus来实现
export class App extends Component {
  componentDidMount() {
    eventBus.on("info", this.nextPre);
  }

  nextPre(name, age, height) {
    console.log(name, age, height);
  }

  componentWillUnmount() {
    eventBus.off("info", this.nextPre);
  }

  render() {
    return (
      <div>
        <Home></Home>
        <Cart></Cart>
      </div>
    );
  }
}

export default App;
