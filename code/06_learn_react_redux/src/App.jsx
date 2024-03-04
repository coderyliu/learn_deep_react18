import React, { PureComponent } from "react";
import About from "./pages/About";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./style.css";

export class App extends PureComponent {
  render() {
    return (
      <div className="page">
        <Home></Home>
        <Profile></Profile>
        <About></About>
        <Category></Category>
      </div>
    );
  }
}

export default App;
