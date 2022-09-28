import React, { memo ,useEffect} from 'react'
import { useState } from 'react'

const App = memo(() => {
  // ?useEffect是一个effect hook叫做副作用钩子
  // ?主要帮助我们在函数式组件中完成一些side effect的业务逻辑，包括：网络请求,事件监听,redux订阅，事件总线,DOM操作等
  // todo 用法：useEffect函数接受两个参数：
  // 参数一：函数，这个个函数会在函数式组件挂载到DOM或者函数式组件更新之后立马执行
  // 参数二：数组，表示这个effect hook受谁的影响，如果是一个空数组，不受任何影响，只会执行一次effect hook,后面详细介绍
  
  const [counter,setCounter]=useState(0)
  useEffect(()=>{
    document.title=counter
  })

  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
    </div>
  )
})

export default App