import React, { PureComponent } from "react";
import store from '../store'
import { subNumberAction } from "../store/counter/actionCreators";

export class Profile extends PureComponent {
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

  decrement(num) {
    store.dispatch(subNumberAction(num));
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="profile">
        <h2>Profile Page {counter}</h2>
        <button onClick={(e) => this.decrement(1)}>-1</button>
        <button onClick={(e) => this.decrement(5)}>-5</button>
        <button onClick={(e) => this.decrement(10)}>-10</button>
      </div>
    );
  }
}

export default Profile;
