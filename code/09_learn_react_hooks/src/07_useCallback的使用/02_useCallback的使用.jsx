import React, { memo } from "react";
import { useCallback, useState } from "react";

const App = memo(() => {
  // ?我们先来看一个简单的例子，来了解useCallback 这个Hook的目的-->性能优化
  const [counter, setCounter] = useState(0);
  const [message,setMessage]=useState('hello react')

  // todo 我们每一次去+1的时候，都会重新渲染函数式组件，那么函数式组件就会重新执行（自上而下）
  // todo 函数在执行的时候，increment函数就会重新被创建，重新被定义，每一次都是这样，这样就有可能造成内存泄漏
  // todo 尽管浏览器有垃圾回收机制，但是每次渲染重新执行函数，每次都会创建新的函数，这样是不友好的
  // todo 所以就有了useCallback这个Hook
  // ?使用方法：接受两个参数，第一个是一个回调函数，第二个是一个数组
  // ?返回值：就是传入的回调函数，只不过加了一些性能优化
  
  // 1.简单使用，这样使用其实也是没有优化，你会发现函数还是会被创建，定义
  // const increment=useCallback(()=>{
  //   console.log('函数又被重新执行了');
  //   setCounter(counter+1)
  // })

  // 2.如果我们要有优化的效果，要掺入第二个参数一个数组，这个数组的作用和Effect Hook的作用一样
  // 让我们的函数受什么控制,[]数组不受任何控制
  // ?原理涉及到闭包，函数重新渲染的时机
  // ?比如：函数重新渲染的时候，useCallback()函数也会再次执行，再次定义函数，那么我们定义最开始的函数为foo1(),重新渲染后的函数为foo2
  // ?这时候，按照道理老说，foo2会替换foo1,但是这不是和最开始的没有用useCallback()一样了？
  // ?所以我们传入数组第二个参数，来决定foo1什么时候会被替换，如果没有受影响，那么我们就不会用foo2替换foo1，这样做的目的稍后用案例说明
  // todo 结论，useCallback本质上来说，从定义函数的角度来讲，并没有做到优化，但是如果这个函数传递给子组件，就能做到性能优化
  const increment=useCallback(()=>{
    console.log('函数又被重新执行了');
    setCounter(counter+1)
  },[counter])

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>+1</button>
      <h2>{message}</h2>
      <button onClick={()=>setMessage('你好啊，李银河')}>修改信息</button>
    </div>
  );
});

export default App;
