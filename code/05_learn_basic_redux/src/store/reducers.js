const actionTypes = require("./constants");

// 初始化store中的state数据
const initialState = {
  counter: 0,
};

// 创建一个reducer,要求必须是一个纯函数
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.counter,
      };
    case actionTypes.SUB_NUMBER:
      return {
        ...state,
        counter: state.counter - action.counter,
      };
    default:
      return state;
  }
}

module.exports = reducer;
