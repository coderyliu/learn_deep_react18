import React, { PureComponent } from "react";

// ?classnames是一个库，为了方便我们在react中动态绑定class
import classNames from 'classnames'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      isLogin:false
    }
  }
  
  render() {
    // ?没有classnames的话，我们动态绑定className比较麻烦
    const {isLogin}=this.state
    const className=['aaa']
    if(!isLogin) className.push('bbb')

    return (
      <div>
        {/* 没有Classnames这个库的绑定class方式 */}
        <h2 className={className.join(' ')}>哈哈哈哈</h2>
        <h2 className={`aaa ${isLogin?'ccc':'ddd'}`}>嘻嘻嘻</h2>

        {/* 有了classnames这个库的使用方式 */}
        <h2 className={classNames('ooo',{'ppp':!isLogin})}>呵呵呵</h2>
        <h2 className={classNames('ooo',{'nnn':!isLogin},{'mmm':!isLogin})}>嘿嘿嘿</h2>
        <h2 className={classNames('ooo',{'nnn':!isLogin,'mmm':!isLogin})}>嘿嘿嘿</h2>
      </div>
    )
  }
}

export default App;
