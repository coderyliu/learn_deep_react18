import React, { PureComponent, createRef } from "react";

// ?ref当然也可以直接应用在组件上
// todo 下面是直接获取组件实例通过ref
class HelloWorld extends PureComponent {
  render() {
    return (
      <div>
        <h2>你好啊，未来的coder</h2>
      </div>
    );
  }
}

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      message: "hello react",
    };

    // todo 方式2
    this.titleRef = createRef();
  }

  getElement(el) {
    // ?以下这三种方式对元素和类组件同样适用，但是不适用于函数式组件
    // ?我们绑定到类组件中，获取到的是整个类组件实例,但是函数式组件只是一个函数，不是一个类

    // todo 方式1：通过ref传入一个字符串，在this.refs.字符串的方式拿到，不过这种已经废弃
    // console.log(this.refs.coder);

    // todo 方式2：通过createRef()的方式,会返回一个对象，赋值给ref,以this.titleRef.current拿到
    // console.log(this.titleRef.current);

    // todo 方式3：传入一个回调函数，会传入一个参数element,在挂载到DOM的时候绑定
    console.log(this.titleRef);
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <HelloWorld ref={(el) => (this.titleRef = el)}></HelloWorld>
        <button onClick={() => this.getElement()}>获取元素</button>
      </div>
    );
  }
}

export default App;
