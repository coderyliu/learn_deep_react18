import React, { PureComponent, createRef, memo, forwardRef } from "react";

// ?下面是获取函数式组件
// 实际上，函数式组件的第二个参数，可以传递一个ref,通过forwardRef
const HelloWorld = memo(
  forwardRef(function (props, ref) {
    return (
      <div>
        <h2 ref={ref}>你好啊，腾讯云</h2>
        <button>哈哈哈</button>
      </div>
    );
  })
);

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      message: "hello react",
    };

    this.titleRef = createRef();
  }

  getElement() {
    // ?如果是函数式组件，我们可以获取到其中的某个元素，通过ref传递
    console.log(this.titleRef.current);
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.titleRef}></HelloWorld>
        <button onClick={() => this.getElement()}>获取元素</button>
      </div>
    );
  }
}

export default App;
