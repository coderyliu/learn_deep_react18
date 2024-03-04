// ?类组件中的生命周期函数
import React, { PureComponent } from "react";
import axios from "axios";

// ?在这个案例中做了一个生命周期函数的测试
// 生命周期的执行顺序:
// 初次执行：constructor --> render --> componentDidMount
// 要更新时(setState()或者props或者forceUpdate()发生变化)：shouldComponentUpdate --> render --> getSnapShotBeforeUpdate --> componentDidUpdate
// 卸载时：componentWillUnmount

// todo 注意：componentDidMount只会在组件挂载时执行，当组件的状态更新时，触发render函数重新渲染组件，不会再执行componentDidMount
// todo 在render函数重新执行的过程中，我们的state也不会重新被赋值，因为constructor也不会重新执行
// todo 组件已经挂载到真实DOM上了，所以再次重新渲染，叫做update

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      banners: [],
      recommends: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount executor");
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      this.setState({
        banners: banners,
        recommends: recommends,
      });
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate executor", this.state);
  }

  render() {
    const { banners, recommends, counter } = this.state;

    return (
      <div>
        <h2>轮播图数据</h2>
        <ul>
          {banners.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
        <h2>推荐数据</h2>
        <ul>
          {recommends.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
        <h2>计数器：{counter}</h2>
        <button onClick={(e) => this.setState({ counter: counter + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default App;
