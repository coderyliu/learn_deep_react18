import React, { memo } from 'react'
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react'

// ?使用useEffect修改数字
// ?会出现抖动的情况
const App = memo(() => {
  const [counter,setCounter]=useState(100)

  useEffect(()=>{
    console.log('useEffect执行了');
    if(counter===0){
      setCounter(Math.random())
    }
  },[counter])

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={()=>setCounter(0)}>设置为0</button>
    </div>
  )
})

export default App