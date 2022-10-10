import React, { memo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

// ?自定义Hook必须以use开头，才能使用hooks
function useLogos(cName){
  useEffect(()=>{
    console.log(`${cName}组件被创建了`);

    return ()=>{
      console.log(`${cName}组件被销毁了`);
    }
  },[])
}

const About =memo(()=>{
  useLogos('About')

  return (
    <>
      <h2>About Page</h2>
    </>
  )
})

const Home =memo(()=>{
  useLogos('Home')

  return (
    <>
      <h2>Home Page</h2>
    </>
  )
})

const App = memo(() => {
  const [isShow,setIsShow]=useState(true)

  useLogos('App')

  return (
    <div>
      <h2>App Page</h2>
      <button onClick={()=>setIsShow(!isShow)}>切换</button>
      {isShow&&<Home></Home>}
      {isShow&&<About></About>}
    </div>
  )
})

export default App