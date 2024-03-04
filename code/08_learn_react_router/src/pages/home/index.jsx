import React, { PureComponent } from "react";
import { Outlet } from "react-router-dom";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home Page</h1>

        {/* OutLet组件就相当于vue-router提供给我们的router-view组件，占位使用的 */}
        <Outlet></Outlet>
      </div>
    );
  }
}

export default Home;
