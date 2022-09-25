import React, { PureComponent,memo } from "react";

const Helloworld = memo(function(props) {
  let message='hello world'
  
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={()=>message='你好啊，李银河'}>修改信息</button>
    </div>
  )
});

// ?上面的是函数式组件，下面的是类组件
// 从中可以看出很多区别：
// 1.类组件中的是有状态组件，有维护的state,函数式组件是无状态组件，没有可维护的state
// 2.类组件中有生命周期函数，函数式组件中没有办法调用生命周期函数，生命周期函数中我们可能会执行很多异步网络请求，在没有useEffect函数式组件是没有实现的
// 3.类组件中当我们使用setState()，render函数会被重新执行,函数式组件中就会渲染一次，我们怎么改变函数组件才会重新渲染呢，没出现hooks之前是实现不了的

// ?类组件的优缺点
// todo 缺点：
// 1.使用class来创建，很复杂，初学者必须掌握ES6的class语法，才能更好的写好class类组件
// 2.如果我们的业务逻辑比较多，那么我们的class类组件是非常臃肿的，不方便阅读
// 3.在类组件中有个必须掌握好的关键：this，这是非常重要的，但是要理解this指向也是很复杂的

// todo 优点
// 帮助我们继承了React的核心技术：state,生命周期函数，render函数，setState()

export class App extends PureComponent {
  constructor(props){
    super()

    this.props=props
    this.state={
      message:'hello curry'
    }
  }

  componentDidMount(){}
  componentWillUnmount(){}

  render() {
    const {message}=this.state

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={(e)=>this.setState({message:'hello coderyliu'})}>修改信息</button>
        <hr />
        <Helloworld></Helloworld>
      </div>
    )
  }
}

export default App;
