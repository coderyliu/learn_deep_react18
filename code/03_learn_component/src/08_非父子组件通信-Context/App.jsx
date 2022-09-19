import React, { Component } from "react";
import Home from "./Home";

// ?和vue一样如果涉及到子孙组件之间的通信方式的话，vue提供了provide和inject数据注入的方式
// ?但是react中没有，如果一层一层通过props传递的话可能会很麻烦,因此react提供了context来实现子孙之间的通信

// todo 第一步：创建context实例，可以创建很多
import ThemeContext from './context/themeContext'
import Profile from "./Profile";

export class App extends Component {
  constructor(){
    super()

    this.state={
      name:'coder',
      age:18,
      height:1.88
    }
  }

  render() {
    return (
      <div>
        {/* 第二步，通过themeContext提供的react组件，来包裹要实现共享App中的state中数据的消费组件 */}
        {/* 第三步，指定ThemeContext.Provider 的value，value是要共享给消费组件的值 */}
        {/* 第四步，在相应的消费组件中指定要使用的context，一个消费组件只能使用一个context */}
        {/* 第五步，在消费组件中通过this.context使用 */}
        <ThemeContext.Provider value={{...this.state}}>
          <Home></Home>
        </ThemeContext.Provider>

        {/* 使用Consumer组件，提供非消费组件来使用context的defaultValue */}
        <Profile></Profile>
      </div>
    )
  }
}

export default App;
