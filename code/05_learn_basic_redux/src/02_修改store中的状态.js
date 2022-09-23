const store = require('./store')

const {
  addNumberAction,
  subNumberAction
} = require('./store/createActions')

// ?react中的三个基本思想
// 1.单一数据源
// 2.state只读
// 3.reducer是一个纯函数

// ?要改变state中的状态，就只有唯一的途径，通过dispatch分发---分发是同步的
// ?另外值得注意的是，dispatch分发的只能是一个对象，格式为：{type:'要分发的action的类型(自定义)',payload:载体(参数)}
// ?如果要分发函数：需要借助一个插件redux-thunk,来增强store的分发类型

// todo 分发的时候，如果写成对象格式{},这种效率低，所以一般都写成函数形式，返回一个对象
store.dispatch(addNumberAction(1))
store.dispatch(addNumberAction(2))

console.log(store.getState())

store.dispatch(subNumberAction(10))

console.log(store.getState())