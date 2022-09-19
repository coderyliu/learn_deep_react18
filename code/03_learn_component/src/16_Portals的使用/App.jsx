import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

// ?Portals和Vue中的Teleport组件一样，作用就是希望我们可以挂载组件或者元素到我们想要挂载的地方，而不止于根元素
// todo 想要使用利用createPortals API
// createPortal(child,container)接受两个参数，第一个参数代表要渲染的元素（元素/字符串/组件/fragment）,第二个参数是要挂载到的DOM
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        {createPortal(<h2>哈哈哈</h2>, document.querySelector("#user"))}

        {/* 2.modal组件 */}
        <Modal>
          <h2>嘻嘻嘻</h2>
          <h2>嘿嘿嘿</h2>
        </Modal>
      </div>
    );
  }
}

export default App;
