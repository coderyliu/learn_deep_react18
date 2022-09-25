import React, { PureComponent } from "react";

export class CounterClass extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  increment(num) {
    this.setState((state) => {
      return {
        counter: state.counter + num,
      };
    });
  }

  decrement(num) {
    this.setState((state) => {
      return {
        counter: state.counter - num,
      };
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={(e) => this.increment(1)}>+1</button>
        <button onClick={(e) => this.decrement(1)}>-1</button>
      </div>
    );
  }
}

export default CounterClass;
