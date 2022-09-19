import React, { PureComponent } from "react";

// ?我们知道，早期的表单都是通过点击直接跳转到指定的action地址
// ?但是，这种会触发页面刷新，所以不推荐这种，都是通过我们点击提交按钮之后，发起ajax请求来实现的
export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "coderyliu",
      password:''
    };
  }

  // 表单提交事件
  handleSubmitClick(e){
    // 阻止表单的默认行为
    e.preventDefault()

    // 获取表单中的数据
    console.log('用户名，密码为:',this.state.username,this.state.password);

    // 发起ajax/axios/fetch请求

  }

  inputHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { username,password } = this.state;

    return (
      <div>
        <form onSubmit={(e)=>this.handleSubmitClick(e)}>
          {/* label和表单的id相关联，点击label文本，表单元素可以获取到焦点 */}
          <label htmlFor="username">
            {/* 这个时候，你只指定了表单的默认值，react要求如果制定了默认值（state唯一的数据源），必须通过onChange事件更新state中响应的数据源,这就是受控组件 */}
            用户名:
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => this.inputHandleChange(e)}
            />
          </label>
          <label htmlFor="password">
            {/* 这个时候，你只指定了表单的默认值，react要求如果制定了默认值（state唯一的数据源），必须通过onChange事件更新state中响应的数据源,这就是受控组件 */}
            密码为:
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => this.inputHandleChange(e)}
            />
          </label>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
