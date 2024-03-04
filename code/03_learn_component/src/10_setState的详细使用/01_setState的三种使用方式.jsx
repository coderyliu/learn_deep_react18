import React, { Component } from "react";

// ?从setState中就能看到react和vue的一些区别
// ?vue中的data数据是响应式的，是经过数据劫持的，每个data中的值都有相应的dep，dep中有观察者，当触发dep的时候，触发观察者的update方法，就会重新渲染，diff算法更新页面
// ?但是在react中一切都是透明的，state不是响应式的，没有数据劫持，如果我们改变了state中的数据，想要重新渲染render的话，react给我们提供了setState()方法，重新执行render函数，更新页面

// todo setState()方法来告诉react的数据已经发生了变化，需要重新执行render函数
// todo setState有三种使用形式
export class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "hello react",
      counter: 0,
    };
  }

  btnClick1() {
    // ?第一种：setState({})传入的是一个对象
    // todo 实际上是重新创建了一个新的对象obj,覆盖原来的state中的变量，但是是一个前拷贝利用Object.assign()
    // todo 相当于 this.state=Object.assign(this.state,obj)
    this.setState({
      message: "你好啊，李银河",
      // ?你会发现，counter还是存在的
    });
  }

  btnClick2() {
    // ?第二种：setState(()=>{})传入的是一个回调函数
    // 好处一：可以拿到以前的props和state
    // 好处二：可以执行一些state的业务逻辑
    this.setState((state, props) => {
      console.log(props, state);
    });
  }

  btnClick3() {
    // ?第三种：setState()还有第二个参数，表示更新state中的数据之后，立即执行state的第二个参数传入的回调函数，你可以理解为nextTick()
    this.setState(
      () => {
        console.log(1);
      },
      () => {
        console.log(this.state);
      }
    );
  }

  increment() {}

  decrement() {}

  render() {
    const { message, counter } = this.state;

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => this.btnClick1()}>按钮1</button>
        <button onClick={() => this.btnClick2()}>按钮2</button>
        <button onClick={() => this.btnClick3()}>按钮3</button>

        <h2>{counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.decrement()}>-1</button>
      </div>
    );
  }
}

export default App;
