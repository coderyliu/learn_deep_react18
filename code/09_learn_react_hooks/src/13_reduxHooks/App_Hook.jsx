import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, subNumber } from "./store/modules/counter";

const Home = memo((props) => {
  // ?1.useSelector的使用
  const { count } = useSelector((state) => {
    return {
      count: state.counter.count,
    };
  });

  // ?2.useDispatch的使用
  const dispatch = useDispatch();
  function handleCountClick(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumber(num));
    } else {
      dispatch(subNumber(num));
    }
  }

  return (
    <div>
      <h2>Home Page</h2>
      <h2>当前计数:{count}</h2>
      <button onClick={handleCountClick(1)}>+1</button>
      <button onClick={handleCountClick(5)}>+5</button>
      <button onClick={handleCountClick(5, false)}>-5</button>
    </div>
  );
});

const App = memo((props) => {
  return (
    <div>
      <h2>App Page</h2>
      <Home></Home>
    </div>
  );
});

export default App;
