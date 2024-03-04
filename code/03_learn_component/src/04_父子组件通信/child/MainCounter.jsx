import React, { Component } from "react";

export class MainCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // ?父子组件之间的通信方式：子组件通过props调用父组件的函数，触发父组件执行某些业务逻辑
  addCounter(count) {
    this.props.increment(count);
  }

  subCounter(count) {
    this.props.decrement(count);
  }

  render() {
    const { counter } = this.props;

    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={(e) => this.addCounter(1)}>+1</button>
        <button onClick={(e) => this.addCounter(5)}>+5</button>
        <button onClick={(e) => this.addCounter(10)}>+10</button>
        <button onClick={(e) => this.subCounter(1)}>-1</button>
        <button onClick={(e) => this.subCounter(5)}>-5</button>
        <button onClick={(e) => this.subCounter(10)}>-10</button>
      </div>
    );
  }
}

export default MainCounter;
