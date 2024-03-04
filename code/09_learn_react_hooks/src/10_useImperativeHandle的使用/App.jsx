import React, { memo } from "react";
import { useImperativeHandle } from "react";
import { useRef, useEffect } from "react";
import { forwardRef } from "react";

// ?useImperativeHandle Hook的使用场景
// ?当我们通过ref获取子组件DOM元素时，我们只是希望父组件对子组件的某些操作有权利，而不是获取子组件元素的全部权利，这个时候可以用这个Hook进行一些拦截
const HelloWorld = memo(
  forwardRef((props, ref) => {
    const inputRef = useRef();
    // todo 接受一个函数，这个函数返回一个对象，这个对象就会被赋值到父组件的ref.current中
    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        getValue() {
          console.log(inputRef.current.value);
        },
      };
    });

    return (
      <div>
        <input type="text" ref={inputRef} />
      </div>
    );
  })
);

const App = memo(() => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  });

  return (
    <div>
      <HelloWorld ref={inputRef}></HelloWorld>
    </div>
  );
});

export default App;
