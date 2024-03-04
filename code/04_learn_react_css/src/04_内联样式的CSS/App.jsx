import React, { PureComponent } from "react";

// ?组件话天下的CSS
// todo 我们希望组件化的方式写css满足以下几点：
// 1.能够兼容所有的CSS属性--比如：伪元素/伪类/媒体查询等
// 2.能够尽可能的简洁，方便
// 3.能够做到全局作用域和局部作用域有区别
// 4.能够通过js的方式去动态修改css中的变量，修改样式

// ?但是，其实vue的css方式其实很方便，很好用了，在.vue文件中，通过style标签，加上scoped以及lang等很友好的方式
// ?而react一直没有很好的答案，演变状态为：内联样式+css文件 --> css modules --> css in js -->各类库

// ?第一种方式：内联样式
// 优点：1.不会造成样式覆盖  2.可以通过state动态修改样式
// 缺点：1.写起来难以维护   2.不能使用伪元素/伪类这种css样式   3.某些样式没有提示  4.写法上需要驼峰
export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      message: "hello react",
      titleSize: 50,
    };
  }

  render() {
    const { message, titleSize } = this.state;

    return (
      <div>
        <h2 style={{ color: "#f00", fontSize: "30px" }}>{message}</h2>
        <h2 style={{ color: "#bfa", fontSize: `${titleSize}px` }}>
          你好啊，李银河
        </h2>

        <button onClick={() => this.setState({ titleSize: titleSize + 2 })}>
          修改样式
        </button>
      </div>
    );
  }
}

export default App;
