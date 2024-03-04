import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

// 开启redux
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// 增强redux,支持dispatch 函数借助redux-thunk
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
