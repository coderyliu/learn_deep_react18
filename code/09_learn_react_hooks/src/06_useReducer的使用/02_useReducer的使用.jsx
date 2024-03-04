import React, { memo } from "react";
import { useReducer } from "react";
import { useState } from "react";

// 定义一个reducer函数
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "add_number":
      return { ...state, counter: state.counter + action.num };
    case "sub_number":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}

const App = memo(() => {
  // ?useReducer的这个Hook出现主要是为了帮助我们管理函数式组件复杂的状态State
  // todo 比如，我们使用State Hook的时候

  // ?这个函数式组件中的状态可能非常多，那我们就要每次都useState()去管理状态
  // todo 这个时候我们可以使用useReducer去帮助我们管理，使用方式类似于redux
  // const [counter,setCounter]=useState(0)
  // const [message,setMessage]=useState('hello coderyliu')

  // ?useReducer函数对的第一个参数，一个reducer我们自定义的函数
  // ?第二个参数，我们的reducer的初始化状态state
  // todo 返回的也是一个数组，第一个是状态state,第二个是dispatch
  // todo useReducer不是redux的替代品，也代替不了redux,这个hook使用的很少，还是建议使用useState，这个才是重要的Hook
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    friends: [],
    books: [],
  });

  return (
    <div>
      <h2>App Counter {state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={(e) => dispatch({ type: "add_number", num: 5 })}>
        +5
      </button>
      <button onClick={(e) => dispatch({ type: "sub_number", num: 5 })}>
        -5
      </button>
    </div>
  );
});

export default App;
