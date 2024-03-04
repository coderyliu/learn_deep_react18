import React, { memo } from "react";
// import { useState } from 'react'
// import { useEffect } from 'react'
import useScrollPosition from "./hooks/useScrollPosition";
import "./style.css";

// ?假如现在我们需要在组件mount的时候获取滚动条的位置，那么这时候可能需要在每一个组件中使用
// ?如果我们在每一个组件中都使用，写起来非常不方便，这个时候我们可以使用hook
const App = memo(() => {
  // todo 如果不封装hook,那么在每个组件中使用就很麻烦
  // const [scrollX,setScrollX]=useState(0)
  // const [scrollY,setScrollY]=useState(0)

  // useEffect(()=>{
  //   function handleScrollPosition(e){
  //     // console.log(e);
  //     // console.log(window.scrollX,window.scrollY);
  //     setScrollX(window.scrollX)
  //     setScrollY(window.scrollY)
  //   }

  //   window.addEventListener('scroll',handleScrollPosition)

  //   return ()=>{
  //     window.removeEventListener('scroll',handleScrollPosition)
  //   }
  // })

  // todo 如果封装了hook，那么在每个组件中使用就很灵活
  const [scrollX, scrollY] = useScrollPosition();

  return (
    <div className="wrapper">
      <h2>App Page</h2>
      <h2>
        {scrollX}-{scrollY}
      </h2>
    </div>
  );
});

export default App;
