import React from "react";
// import HelloWorld from "./HelloWorld";

// ?在react中根据不同的含义可以划分为不同的组件
// ?根据定义组件的方式，可以划分为：类组件和函数式组件
// ?根据组件内部是否维护state状态，可以划分为：有状态组件和无状态组件
// ?根据不同的职责可以划分为：容器型组件和展示型组件

class App extends React.Component{
  // ?定义class组件的三要素：
    // 1.类组件的名称首字母必须大写，通常为大驼峰命名
    // 2.类组件必须继承自React.Component
    // 3.类组件必须有一个render函数，constructor可选

  // ?render函数的返回值
  render(){
    // todo 1.可以返回元素或者组件，其实在jsx中，我们组件返回的都是经过React.createElement()处理后生成的reactElement对象
    // return (
    //   <div>
    //     <h2>你好啊，李银河</h2>
    //   </div>
    // )
    // return <HelloWorld></HelloWorld>

    // todo 2.也可以直接返回number/string直接渲染
    // return 3
    
    // todo 3.直接返回一个null/undefined/boolean,不会显示
    // return true
    // return undefined

    // todo 4.直接返回一个数组,直接渲染展示
    // return ['abc','cba','nba']
    return [
      <h2>呵呵呵</h2>,
      <h3>系休息</h3>
    ]

    // todo 5.直接返回一个fragment,文档碎片
    // todo 6.Portals 后面了解
  }
}

export default App