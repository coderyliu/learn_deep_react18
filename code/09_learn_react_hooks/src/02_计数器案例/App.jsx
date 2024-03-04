import React, { PureComponent } from "react";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <CounterClass></CounterClass>
        <hr />
        <CounterFunction></CounterFunction>
      </div>
    );
  }
}

export default App;
