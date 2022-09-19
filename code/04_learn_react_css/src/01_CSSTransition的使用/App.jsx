import React, { PureComponent } from "react";

// ?react中完成过渡动画等需要借助react-transition-group这个库来完成
// ?里面有四个比较重要的组件
// 1.Transition
// 2.CSSTransition---用于单个组件/元素的切换（插入/移除）
// 3.SwitchTransition---用于两个组件/元素之间的切换
// 4.TransitionGroup---用于一组元素/组件之间的切换
import { CSSTransition } from "react-transition-group";

// ?实现过渡效果的css样式
import "./style.css";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      isLogin: true,
    };
  }

  render() {
    const { isLogin } = this.state;

    return (
      <div>
        {/* CSSTransition中比较重要的属性:in来控制显示/消失;timeout--时长；classNames添加css样式；unmountOnExit消失时卸载组件； */}
        <button onClick={() => this.setState({ isLogin: !isLogin })}>
          切换
        </button>
        {/* 当然，还提供了一些钩子函数来帮助我们完成一些事情 */}
        <CSSTransition
          classNames="coder"
          in={isLogin}
          appear
          timeout={2000}
          unmountOnExit={true}
          onEnter={()=>console.log('enter')}
          onEntering={()=>console.log('entering')}
          onEntered={()=>console.log('entered')}
          onExit={()=>console.log('exit')}
          onExiting={()=>console.log('exiting')}
          onExited={()=>console.log('exited')}
        >
          <div>{isLogin && <h2>哈哈哈哈</h2>}</div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
