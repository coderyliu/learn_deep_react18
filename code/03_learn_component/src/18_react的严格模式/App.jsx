import React, { PureComponent, StrictMode } from "react";
import Home from "./Home";
import Profile from "./Profile";

// ?react的严格模式StrictMode，是为了帮助我们更好的发现问题
// todo 使用方式，通过StrictMode包裹要开启严格模式的组件

// ?注意：严格模式的开启，仅在开发环境生效，在生产环境不会生效
// ?开启严格模式之后：
// 1.组件的生命周期函数会被执行两次--检查意外的副作用
// 2.被废弃的API在使用会抛出错误警告
// 3.识别不安全的生命周期--比如:componentWillMount
// 4.检测过时的context使用语法
export class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 开启严格模式的组件 */}
        <StrictMode>
          <Home></Home>
        </StrictMode>

        {/* 未开启严格模式的组件 */}
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
