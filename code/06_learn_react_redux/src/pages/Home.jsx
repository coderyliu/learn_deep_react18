import React, { PureComponent } from "react";
import store from "../store";
import { addNumberAction } from "../store/counter/actionCreators";

export class Home extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counter.counter,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ counter: store.getState().counter.counter });
    });
  }

  increment(num) {
    store.dispatch(addNumberAction(num));
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="home">
        <h2>Home Page {counter}</h2>
        <button onClick={(e) => this.increment(1)}>+1</button>
        <button onClick={(e) => this.increment(5)}>+5</button>
        <button onClick={(e) => this.increment(10)}>+10</button>
      </div>
    );
  }
}

export default Home;
