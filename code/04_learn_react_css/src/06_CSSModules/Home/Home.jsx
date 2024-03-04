import React, { PureComponent } from "react";

import homeStyle from "./style.module.css";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>Home Page</h2>
      </div>
    );
  }
}

export default Home;
