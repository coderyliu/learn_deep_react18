import React, { Component } from 'react'

export class HelloWorld extends Component {
  constructor(){
    console.log('constructor被触发');
    super()

    this.state={
      message:'hello world'
    }
  }

  toggleClick(){
    this.setState({
      message:'你好啊，李银河'
    })
  }

  render() {
    const {message}=this.state
    console.log('render被触发');

    return (
      <div>
        <h2>{message}</h2>
        <h2>{message}是我们做的第一个程序</h2>
        <button onClick={()=>this.toggleClick()}>切换</button>
      </div>

    )
  }

  componentDidMount(){
    console.log('挂载被触发');
  }

  componentDidUpdate(preProps,preState,snapshot){
    console.log('update被触发',preProps,preState,snapshot);
  }

  //性能优化常用生命周期函数
  shouldComponentUpdate(){
    return true
  }

  componentWillUnmount(){
    console.log('组件被销毁了');
  }

  getSnapshotBeforeUpdate(){
    return {
      name:'coder',
      age:21,
      height:1.88
    }
  }
}

export default HelloWorld