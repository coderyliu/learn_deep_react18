import React, { PureComponent } from "react";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

// todo 以后创建类组件的时候，大部分都使用的是PureComponent和高阶组件memo
export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      message: "hello react",
      counter: 0,
    };
  }

  // ?我们通过修改父组件中的state数据，render函数会重新执行渲染，那么这时候，子组件也会被重新渲染，但是子组件中的数据（state,props,context）并没有发生变化
  // ?那么这个时候，子组件的render函数也会重新执行，这就很不友好了，很浪费性能，所以我们要考虑优化这一点
  // todo 实现的方式我们可以通过shouldComponentUpdate来进行优化
  changeText() {
    this.setState({
      message: "你好啊，李银河",
    });
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // ?这里的生命周期函数，我们可以拿到三个值：newProps,newState,nextContext
  // ?在这个生命周期函数中，我们仅仅是拿到了最新的state,props，但是组件实例的state,props还没有改变，我们可以做一个对比
  // ?这样做的话，我们每次都要自己手动判断，很麻烦，所以react提我们封装好了，我们创建组件的时候继承自PureComponent就可以了
  // shouldComponentUpdate(newProps,newState,nextContext){
  //   console.log(newProps,newState,nextContext);

  // ?这样的话，我们就可以做一个优化，但是子组件也得这样做一个判断
  //   if(this.state.message!==newState.message||this.state.counter!==newState.counter){
  //     return true
  //   }

  //   return false
  // }

  render() {
    console.log("App render");
    const { message, counter } = this.state;

    return (
      <div>
        <h2>App Page</h2>
        <h2>
          {message}-{counter}
        </h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.increment()}>+1</button>
        <Home message={message}></Home>
        <Profile counter={counter}></Profile>
        <About message={message}></About>
      </div>
    );
  }
}

export default App;
