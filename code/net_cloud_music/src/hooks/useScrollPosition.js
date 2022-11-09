import { useEffect, useRef, useState } from "react";

function useScrollPosition(){
  // 状态
  const [scrollX,setScrollX]=useState(0)
  const [scrollY,setScrollY]=useState(0)

  // 获取元素
  const dcRef=useRef()

  // 监听scroll滚动
  function handleScrollMove(e){
    const scrollX=window.scrollX
    const scrollY=window.scrollY

    setScrollX(scrollX)
    setScrollY(scrollY)
  }

  useEffect(()=>{
    dcRef.current=document.documentElement
    window.addEventListener('scroll',handleScrollMove)

    return ()=>{
      window.removeEventListener('scroll',handleScrollMove)
    }
  },[])

  return {
    scrollX,
    scrollY
  }
}

export default useScrollPosition