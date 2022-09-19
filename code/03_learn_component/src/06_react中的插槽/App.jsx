import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBarTwo from './nav-bar-two'

// ?实际上，react中是没有像vue一样提供给我们<slot></slot>这样的插槽的，但是react太灵活了，我们也可以通过props实现插槽
// 方式一：this.props.children
// 方式二：this.props

// todo1 通过this.props.children实现
export class App extends Component {
  render() {
    // ?2.通过props来实现
    const leftSlot=<button>呵呵呵</button>
    const centerSlot=<button>哈哈哈</button>
    const rightSlot=<button>嘻嘻嘻</button>

    return (
      <div>
        {/* 1.直接写入组件里的元素，在源码中，会被添加到this.props.children中 */}
        <NavBar>
          <span>呵呵呵</span>
          <span>哈哈哈</span>
          <span>嘿嘿嘿</span>
        </NavBar>

        {/* 2.通过props来实现  */}
        <NavBarTwo 
          leftSlot={leftSlot}
          centerSlot={centerSlot}
          rightSlot={rightSlot}
        >
        </NavBarTwo>
      </div>
    )
  }
}

export default App