const { createStore } = require("redux");

const reducer = require("./reducers");

// 创建单一数据源：store
const store = createStore(reducer);

module.exports = store;
