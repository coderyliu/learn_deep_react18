import React, { PureComponent ,Fragment} from 'react'

// ?fragment的意思就是文档碎片，作用就是可以包裹子元素, 且不会被渲染
// ?在Vue2当中，一个template只能有一个根元素，vue3中可以有多个根元素，最主要的原因也是vue的template模版使用了Fragment,而Fragment也不会被渲染

// ?Fragment的语法糖 <></>空标签，但是如果要在Fragment中绑定属性，必须使用<Fragment></Fragment>不能使用语法糖
export class App extends PureComponent {
  render() {
    return (
      // <Fragment>
      //   <h2>哈哈哈</h2>
      //   <h2>嘻嘻嘻</h2>
      // </Fragment>
      <>
        <h2>哈哈哈</h2>
        <h2>嘻嘻嘻</h2>
      </>
    )
  }
}

export default App