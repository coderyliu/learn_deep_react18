import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      counter:0
    }
  }

  componentDidMount(){
    // 组件被挂载生命周期函数只会被执行一次
    document.title=this.state.counter
  }

  componentDidUpdate(){
    // 重新渲染render函数会执行update这个生命周期函数，重新生成虚拟DOM,进行diff算法，更新页面改变的部分
    document.title=this.state.counter
  }

  render() {
    const {counter}=this.state

    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={(e)=>this.setState({counter:counter+1})}>+1</button>
      </div>
    )
  }
}

export default App