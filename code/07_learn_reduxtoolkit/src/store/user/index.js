import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "coder",
    age: 21,
    height: 1.88,
  },
  reducers: {
    // ?这里强调一下数据的不可变性，下面的这种做法和以前的redux的reducer函数处理的方式不一样，但其实是为了提高新能
    // ?以前的reducer函数要返回一个新的state，每次都要浅拷贝一个对象，如果这个对象非常大，那么我们知道，非常消耗性能
    // ?但是如果不返回一个新的state对象，我们怎么对比前后的state是否发生变化呢？才能去更新render函数
    // ?这里的redux利用了一个库immer，来做了一个数据的不可变，state.name=payload这种方式
    // ?我们的state看成是一个树结构，如果我们改变了树中的某个节点，我们会尽可能的复用没有改变的数据的，这样就不用拷贝整个对象
    // ?当然也会形成一个新的对象，形成一个新的树结构，从而实现数据的不可变性
    changeName(state, { payload }) {
      state.name = payload;
    },
  },
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;
