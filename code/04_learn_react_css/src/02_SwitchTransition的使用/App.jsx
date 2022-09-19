import React, { PureComponent } from 'react'

// ?SwitchTransition的使用
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      isLogin:true
    }
  }

  render() {
    const {isLogin}=this.state

    return (
      <div>
        {/* 里面需要嵌套CSSTransition */}
        <SwitchTransition mode='out-in'>
          <CSSTransition
            classNames='coder'  
            unmountOnExit={true}
            timeout={2000}
            key={isLogin?'exit':'login'}
          >
            <button onClick={()=>this.setState({isLogin:!isLogin})}>
              {isLogin?'退出':'登录'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

export default App