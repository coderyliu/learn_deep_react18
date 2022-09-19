import React, { Component } from 'react'

// ?react的setState的设计为什么是异步的？
// todo 首先。vue的更新渲染也是异步渲染，我们data当中的数据会发生变化，但是页面不会立即更新，这正是vue的异步渲染
// todo 而react的异步渲染和vue也有差别，react的重新渲染是和setState()有关，执行setState()之后重新执行render()，才会重新渲染
// todo 所以，react的数据也不会立即更新，页面也不会立即渲染，react会把setState加入异步队列，如果有多个setState会批量处理

// ?异步的原因：
// 第一个：如果不是异步的，每调用一次setState(),就会触发render()更新页面，那么这样太浪费性能了，所以setState()放入异步任务队列，批量处理，更新一次render()
// 第二个：如果是同步的，有可能会造成父子组件的state和props的数据混乱，不一致

export class App extends Component {
  constructor(){
    super()

    this.state={
      message:'你好啊，李银河',
      counter:0
    }
  }

  updateText(){
    this.setState({
      message:'hello react'
    })

    // ?可以看出，react的数据也不会立即更新，而是等同步任务执行完成，在执行异步任务，执行SetState()批量处理更新state
    console.log(this.state.message);
  }

  increment(){
    // ?如果有多个setState()一起执行
    // todo 你会发现，这种方式setState()依然是批量处理，只是创建了一个新的对象，多个setState()还没处理，还没有和并进state，所以后面的state还是拿不到最新的state
    // this.setState({
    //   counter:this.state.counter+1
    // })
    // this.setState({
    //   counter:this.state.counter+1
    // })
    // this.setState({
    //   counter:this.state.counter+1
    // })

    // console.log(this.state.counter);

    // ?如果想拿到，需要使用回调函数的方式
    this.setState((state)=>{
      return {
        counter:state.counter+1
      }
    })
    this.setState((state)=>{
      return {
        counter:state.counter+1
      }
    })
    this.setState((state)=>{
      return {
        counter:state.counter+1
      }
    })
    console.log(this.state.counter);
  }

  decrement(){

  }

  render() {
    const {message,counter}=this.state

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={()=>this.updateText()}>修改文本</button>

        <h2>{counter}</h2>
        <button onClick={()=>this.increment()}>+1</button>
        <button onClick={()=>this.decrement()}>-1</button>
      </div>
    )
  }
}

export default App