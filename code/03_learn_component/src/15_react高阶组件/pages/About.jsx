import React, { PureComponent } from "react";

// ?如果我们要在当前的组件中使用context
// import ThemeContext from "../hoc/enhanced_context";

// ?使用高阶组件
import EnhancedContext from "../hoc/enhanced_context";
export class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About Page</h2>
        {/* 如果我在其他组件中也使用了context，这样的话每次都写这样的代码，很不友好，可以放在高阶组件中 */}
        {/* <ThemeContext.Consumer>
          {
            (value) => {
              return <h2>{value.color}-{value.size}</h2>
            }
          }
        </ThemeContext.Consumer> */}

        {/* 使用高阶组件 */}
        <h2>颜色:{this.props.color},大小:{this.props.size}</h2>
      </div>
    );
  }
}

export default EnhancedContext(About);
