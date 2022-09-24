function log(store){
  let next=store.dispatch

  function dispatchLogInfo(action){
    console.log('派发之前log:',action)

    next(action)

    console.log('派发之后log:',store.getState())
  }

  store.dispatch=dispatchLogInfo
}

export default log