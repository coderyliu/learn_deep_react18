import React, { PureComponent } from "react";

// ?受控组件指的是什么？
// ?我们的表单元素，比如输入框，其实在网页输入的时候，我们用原生html+js实现的时候会发现，其实输入的内容是在浏览器中维护的状态
// ?这里的指的是通过e.target.value可以拿到表单内容，就是由浏览器来维护的

// todo 那么react中想要在state中维护，而不是靠浏览器来维护
// todo 这个时候，这个表单组件就成了受控组件，react的state是唯一的数据源

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "coderyliu",
    };
  }

  inputHandleChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        {/* label和表单的id相关联，点击label文本，表单元素可以获取到焦点 */}
        <label htmlFor="username">
          {/* 这个时候，你只指定了表单的默认值，react要求如果制定了默认值（state唯一的数据源），必须通过onChange事件更新state中响应的数据源,这就是受控组件 */}
          用户名:
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => this.inputHandleChange(e)}
          />
        </label>
      </div>
    );
  }
}

export default App;
