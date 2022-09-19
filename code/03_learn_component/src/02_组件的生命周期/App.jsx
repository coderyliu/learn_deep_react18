import React, { Component } from 'react'

import HelloWorld from './HelloWorld'

// ?组件的生命周期比较重要的几个生命周期函数
// 1.shouldComponentUpdate 在这里面做一些性能优化，触发的时机是当我们出发setState或者props的时候，会重新渲染render函数，这个时候我们可以考虑要不要重新渲染，return true渲染，false不渲染
// 2.componentDidMount 触发的时机，当我们的dom真实挂载真实DOM的时候，可以发送一些网络请求（官方推荐）
// 3.getSnapshotBeforeUpdate 在重新update之前，保存一些render之前的数据，可以在componentDidUpdate中拿到
// 4.componentDidUpdate 触发的时机，当重新render之后，重新渲染完成之后立马触发,首次渲染不会触发
// 5.componentWillUnmount 触发的时机，我们的组件在被销毁之前，可以做一些逻辑，避免内存泄漏

export class App extends Component {
  constructor(){
    super()

    this.state={
      isShow:true
    }
  }

  hideCom(){
    this.setState({
      isShow:!this.state.isShow
    })
  }

  render() {
    const {isShow}=this.state

    return (
      <div>
        {isShow&& <HelloWorld></HelloWorld>}
        <button onClick={()=>this.hideCom()}>隐藏</button>
      </div>
    )
  }
}

export default App