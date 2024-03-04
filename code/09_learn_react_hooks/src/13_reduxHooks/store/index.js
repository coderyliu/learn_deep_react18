import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./modules/counter";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
console.log(store.getState());

export default store;
