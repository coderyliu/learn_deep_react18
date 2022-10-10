import React, { memo } from 'react'
import {connect} from 'react-redux'
import { addNumber, subNumber } from './store/modules/counter'

const App = memo((props) => {
  const {count,addNumberAction,subNumberAction}=props
  
  function handleCountClick(num,isAdd=true){
    if(isAdd){
      addNumberAction(num)
    }else{
      subNumberAction(num)
    }
  }

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={handleCountClick(1)}>+1</button>
      <button onClick={handleCountClick(5)}>+5</button>
      <button onClick={handleCountClick(5,false)}>-5</button>
    </div>
  )
})

const mapStateToProps=state=>({
  count:state.counter.count
})

const mapDispatchToProps=dispatch=>({
  addNumberAction(num){
    dispatch(addNumber(num))
  },
  subNumberAction(num){
    dispatch(subNumber(num))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(App)