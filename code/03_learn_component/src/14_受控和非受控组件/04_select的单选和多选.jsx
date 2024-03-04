import React, { PureComponent } from "react";

// ?我们知道，早期的表单都是通过点击直接跳转到指定的action地址
// ?但是，这种会触发页面刷新，所以不推荐这种，都是通过我们点击提交按钮之后，发起ajax请求来实现的
export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "coderyliu",
      password: "",
      isChecked: false,
      hobbies: [
        { name: "篮球", value: "basketball", isChecked: false },
        { name: "足球", value: "football", isChecked: false },
        { name: "排球", value: "volumnball", isChecked: false },
        { name: "乒乓球", value: "ping-pang", isChecked: false },
      ],
      fruits: "orange",
      fruitsArr: [],
    };
  }

  // 表单提交事件
  handleSubmitClick(e) {
    // 阻止表单的默认行为
    e.preventDefault();

    // 获取表单中的数据
    console.log("用户名，密码为:", this.state.username, this.state.password);
    console.log("爱好：", this.state.hobbies);
    console.log("水果:", this.state.fruits);
    console.log("数组", this.state.fruitsArr);

    // 发起ajax/axios/fetch请求
  }

  //  多个输入框这样处理
  inputHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // 单个checkbox的设置
  handleSingleCheck(e) {
    this.setState({
      isChecked: e.target.checked,
    });
  }

  // 多个checkbox的设置
  handleMlutypeChange(e, index) {
    const newHobbies = [...this.state.hobbies];
    newHobbies[index].isChecked = e.target.checked;
    this.setState({ hobbies: newHobbies });
  }

  // 单个select
  handleSingleSelect(e) {
    this.setState({
      fruits: e.target.value,
    });
  }

  // 多个select
  handleMultipleSelect(e) {
    // 先拿到选中的元素
    const htmlCollects = e.target.selectedOptions;

    // 转为数组
    const values = Array.from(htmlCollects).map((item) => item.value);

    // 设置值
    this.setState({ fruitsArr: values });
  }

  render() {
    const { username, password, isChecked, hobbies, fruits, fruitsArr } =
      this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          {/* 1.用户名和密码 */}
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
          <hr />
          <hr />

          {/* 2.checkbox多选框单个和多个 */}
          {/* 单个情况 */}
          <label htmlFor="ball">
            <input
              type="checkbox"
              checked={isChecked}
              id="ball"
              onChange={(e) => this.handleSingleCheck(e)}
            />
            羽毛球
          </label>
          <hr />
          {/* 多个情况 */}
          <div>
            <h2>爱好</h2>
            <ul>
              {hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={index}>
                    <input
                      type="checkbox"
                      id={item.value}
                      checked={item.isChecked}
                      onChange={(e) => this.handleMlutypeChange(e, index)}
                    />
                    <span>{item.name}</span>
                  </label>
                );
              })}
            </ul>
          </div>

          <hr />
          {/* 3.select的单选和多选 */}
          {/* 单选 */}
          <select value={fruits} onChange={(e) => this.handleSingleSelect(e)}>
            <option value="orange">橘子</option>
            <option value="apple">苹果</option>
            <option value="pear">梨</option>
            <option value="banana">香蕉</option>
          </select>
          <hr />
          {/* 多选 */}
          <select
            value={fruitsArr}
            onChange={(e) => this.handleMultipleSelect(e)}
            multiple
          >
            <option value="orange">橘子</option>
            <option value="apple">苹果</option>
            <option value="pear">梨</option>
            <option value="banana">香蕉</option>
          </select>

          <hr />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
