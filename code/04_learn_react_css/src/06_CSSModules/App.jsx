import React, { PureComponent } from "react";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

// ?方式三：CSS Modules
// todo这种方式不是react的特性，而是webpack脚手架给我们提供的特性，并且所有的样式文件都要写成.modules.css/.modules.less/.modules/scss
// todo 使用js的方式编写css样式
import AppStyle from "./App.module.css";

// todo 这种方式编写css样式，必须以引入的模块名.属性名的形式来编写
// todo 这也就是以js的方式来编写css样式，所以不能命名title-home这种连接的类名

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={AppStyle.title}>你好啊，李银河</h2>
        <Home></Home>
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
