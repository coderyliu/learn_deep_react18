import React, { PureComponent } from "react";
import "./style.less";

export class App extends PureComponent {
  render() {
    return (
      <div className="app-wrapper">
        <h2 className="title">你好啊，李银河</h2>
        <div className="content">
          <span className="name">coder</span>
          <span className="age">21</span>
        </div>
      </div>
    );
  }
}

export default App;
