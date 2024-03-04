import { configureStore } from "@reduxjs/toolkit";

// ?configureStore用于创建一个store，比较重要的三个参数
// 参数一：reducer:相当于combinReducers()
// 参数二：devTools:默认为true
// 参数三：middleware中间件配置---@reduxjs/toolkit已经默认帮我们增强了中间件redux-thunk和redux-devtool
import counterReducer from "./counter";
import homeReducer from "./home";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
    user: userReducer,
  },
});

export default store;
