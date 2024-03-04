import { createStore, compose, combineReducers } from "redux";
// import thunk from 'redux-thunk'
import { log, thunk, applyMiddleWare } from "./middleware";

import counterReducer from "./counter";
import homeReducer from "./home";

const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
});

// 开启redux
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// 增强redux,支持dispatch 函数借助redux-thunk
// export default createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
const store = createStore(reducer);

applyMiddleWare(store, log, thunk);

export default store;
