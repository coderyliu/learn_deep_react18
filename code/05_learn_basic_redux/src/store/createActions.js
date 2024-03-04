const actionTypes = require("./constants");

// 创建要分发的dispatch
const addNumberAction = (counter) => {
  return {
    type: actionTypes.ADD_NUMBER,
    counter,
  };
};

const subNumberAction = (counter) => {
  return {
    type: actionTypes.SUB_NUMBER,
    counter,
  };
};

module.exports = {
  addNumberAction,
  subNumberAction,
};
