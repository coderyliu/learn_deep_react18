import { createSlice } from "@reduxjs/toolkit";

// ?第二个重要的API createSlice 创建reducer,返回一个reducer对象
// 接受的的参数：
// name:切片的名称--唯一
// initialState  初始化数据
// reducers :{}对象类型，相当于以前的reducer函数
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 100,
  },
  reducers: {
    addNumber(state, action) {
      state.counter = state.counter + action.payload;
    },
    subNumber(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

// console.log(counterSlice)

// ?这个返回的reducer对象中内置了帮我们创建了相应的action
export const { addNumber, subNumber } = counterSlice.actions;
export default counterSlice.reducer;
