import React, { PureComponent } from 'react'
import Home from './Home/Home'
import Profile from './Profile/Profile'

// ?方式二：外部css文件
// 缺点：会造成作用域污染，样式覆盖
export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Profile></Profile>
      </div>
    )
  }
}

export default App