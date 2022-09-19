import React, { PureComponent } from "react";

// ?那么什么是高阶组件？HigherOrder-Component
// todo 高阶组件其实就是一个函数，但是满足两个条件
// 1.接受一个或者多个组件作为参数
// 2.返回一个新的组件

// ?这个就是一个高阶组件
function enhancedCom(OriginComponent){
  // 函数式组件
  // return props=>{
  //   return (
  //     <OriginComponent {...props}></OriginComponent>
  //   )
  // }

  // 类组件
  return class extends PureComponent{

    render(){
      return (
        <OriginComponent></OriginComponent>
      )
    }
  }
}

export class App extends PureComponent {
  render() {
    return <div>App</div>;
  }
}

export default App;
