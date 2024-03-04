import React, { Component } from "react";
import { flushSync } from "react-dom";

// ?setState()一定是异步的？
// todo 在react18以前setState()不一定是异步的，也有可能是同步的
// react18以前分两种情况：
// 第一：如果this.setState()被包裹在setTimeout中或者使用原生更新DOM的方式，这样setState()是同步的
// 第二：如果是除了以上情况，setState()更新就是异步的

// ?react18以后，setState都是异步的，批量处理的方式
// ?react18之后可以使用 flushSync()来同步setState()

export class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "hello react",
    };
  }

  changeText() {
    // react18以前的方式
    // setTimeout(()=>{
    // this.setState()
    // })

    // react18以后
    flushSync(() => {
      this.setState({
        message: "你好啊，李银河",
      });
    });
    console.log(this.state.message);
  }

  render() {
    console.log(1);
    const { message } = this.state;

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
      </div>
    );
  }
}

export default App;
