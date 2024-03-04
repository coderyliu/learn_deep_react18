const store = require("./store");

const { addNumberAction, subNumberAction } = require("./store/createActions");

// ?访问store中的数据
console.log(store.getState());
