import React, { PureComponent } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserInfo from "./pages/UserInfo";
export class App extends PureComponent {
  render() {
    return (
      <div className="pages">
        <Home></Home>
        <Profile></Profile>
        <About></About>
        <UserInfo></UserInfo>
      </div>
    );
  }
}

export default App;
