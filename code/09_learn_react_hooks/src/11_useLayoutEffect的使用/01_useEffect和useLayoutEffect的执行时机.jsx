import React, { memo } from 'react'
import { useLayoutEffect } from 'react';
import { useEffect } from 'react'

// ?useEffect执行是在挂载到DOM之后立马执行，不会阻塞DOM渲染，是异步的
// ?useLayoutEffect是在挂载到DOM之前，才会执行，是同步的,一般不使用
const App = memo(() => {
  useEffect(()=>{
    console.log('useEffect执行了');
  },[])

  useLayoutEffect(()=>{
    console.log('useLayoutEffect执行了');
  },[])

  console.log('home page');
  return (
    <div>App</div>
  )
})

export default App