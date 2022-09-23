const store=require('./store')

const {addNumberAction,subNumberAction}=require('./store/createActions')

// ?如果我们想要获取store中的state状态变化后的数据，那么我们需要订阅
// 会返回一个函数，取消订阅的时候使用，通常是在componentDidMount的时候订阅，在componentWillUnmount()的时候取消订阅
const unsubscribe=store.subscribe(()=>{
  console.log('订阅数据：',store.getState())
})

// unsubscribe()

// 改变counter的数据
store.dispatch(addNumberAction(10))

