import React, { PureComponent } from "react";
import Category from "./pages/Category";
import Profile from "./pages/Profile";

// 现在我们希望给某些组件拦截之后，计算每个组件的渲染时间
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Profile></Profile>
        <Category></Category>
      </div>
    );
  }
}

export default App;
