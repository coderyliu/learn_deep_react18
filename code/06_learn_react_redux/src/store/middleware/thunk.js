function thunk(store){
  let next=store.dispatch

  function dispatchFn(action){
    if(typeof action==='function'){
      action(store.dispatch,store.getState)
    }else{
      next(action)
    }
  }

  store.dispatch=dispatchFn
}

export default thunk