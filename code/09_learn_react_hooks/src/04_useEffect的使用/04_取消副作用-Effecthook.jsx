import React, { memo ,useEffect} from 'react'
import { useState } from 'react'

const App = memo(() => {
  // todo useEffect的第一个参数是一个回调函数，这个回调函数可以有返回值
  // todo 这个返回值也必须是一个回调函数，这个回调函数会在函数式组件重新渲染之后立马执行
  // ?为什么返回一个回调函数，为了帮助我们清除一些副作用，例如，定时器,redux的订阅，事件监听，事件总线等
  // 注意：在函数式组件重新渲染之后，返回值的回调函数会优先执行，在执行useEffect接受的第一个参数的回调函数
  // todo 相当于componentWillUnmount里做的一些清除副作用的事情，但是hook的功能更强大

  const [counter,setCounter]=useState(0)
  useEffect(()=>{
    document.title=counter
    // 1.订阅redux
    // const unsubscribe=store.subscribe(()=>{})

    // 2.事件总线
    // function foo(){}
    // emit.on('coder',foo)

    // 3.网络请求
    // axios.get('')

    console.log('订阅redux的subscribe','事件总线监听eventBus');
    
    // ?在这个返回值的回调函数中那么你可以做取消副作用的事情
    // ?但是我们通常也不会这么做，因为监听很多次，取消很多次没必要
    return ()=>{
      // unsubscribe()
      // emit.off('coder')
      console.log('取消redux的subscribe','取消事件总线监听');
    }
  })

  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
    </div>
  )
})

export default App