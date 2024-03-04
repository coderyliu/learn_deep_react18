import React, { PureComponent } from "react";
import Cart from "./pages/Cart";

// ?登录鉴权
export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      isLogin: false,
    };
  }

  redirectPage() {
    localStorage.setItem("token", "coderyliu");
    this.setState({ isLogin: true });
  }

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <button onClick={() => this.redirectPage()}>跳转页面</button>
        <Cart></Cart>
      </div>
    );
  }
}

export default App;
