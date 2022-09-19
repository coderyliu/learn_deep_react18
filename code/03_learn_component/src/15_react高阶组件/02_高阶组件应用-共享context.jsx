import React, { PureComponent } from "react";
import About from "./pages/About"
import ThemeContext from "./context/theme_context";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color:'#foo',size:'27px'}}>
          <About></About>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App;
