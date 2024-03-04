import React, { Component } from "react";
import Footer from "./child/Footer";
import Header from "./child/Header";
import Mainner from "./child/Mainner";

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Mainner></Mainner>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
