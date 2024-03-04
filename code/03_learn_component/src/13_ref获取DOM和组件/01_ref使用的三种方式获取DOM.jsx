import React, { PureComponent, createRef } from "react";

// ?react和vue当中都推荐我们不要直接操作DOM元素，比如通过querySelector()的方式
// ?react中也提供给了我们三种方式去获取DOM元素
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
        <h2 ref="coder">{message}</h2>
        <h2 ref={this.titleRef}>你好啊，李银河</h2>
        <h2 ref={(el) => (this.titleRef = el)}>你好啊，coderyliu</h2>
        <button onClick={() => this.getElement()}>获取元素</button>
      </div>
    );
  }
}

export default App;
