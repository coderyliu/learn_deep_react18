
import React, { memo ,useState} from 'react'

// ?hooks是对一类hook的统称：比如：useState(),useEffect(),useReducer(),useContext(),useRef()等
// ?hook就是一个hook函数；比如：state hook ==>useState()
// ?hook的出现可以让我们在不使用class类组件的前提下，在函数式组件中，使用hook实现state,和React的其他功能
// todo 注意：hook的使用只能在函数式组件中，或者自定义hook中，自定义hook必须以use开头
// todo：hook也不能出现在if/switch中，只能在函数式组件的顶部使用

// ?useState来帮助我们实现class类组件中的state
const App = memo(() => {
  // ?useState()接受一个参数，这个参数是初始化的state的值，只会在函数第一次执行时初始化
  // ?useState()返回一个数组，[],第一个返回值为state,第二个返回值为一个函数，通过这个函数传递参数执行，可以更改state
  // ?在使用第二个参数的函数后，会更改state,并且会实现和class的render一样的效果，函数式组件会被重新渲染
  const [message,setMessage]=useState('hello react')

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={(e)=>setMessage('hello world')}>修改信息</button>
    </div>
  )
})

export default App