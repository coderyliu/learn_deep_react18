import React, { PureComponent } from 'react'

// ?Home和Page页面中使用store，非常麻烦,react提供给了我们一个插件，将react和redux联系起来---react-redux
// 首先redux中保管的是可能要在全局组件使用的state,所以提供给了Provider组件，可以包裹App,原理其实就是Context
// 然后，要在使用redux的组件中使用connext---高阶函数，返回一个高阶组件，帮助我们拦截store，做更多的事情
import { connect } from 'react-redux'
import { addNumberAction, subNumberAction } from '../store/counter/actionCreators'

export class About extends PureComponent {
  calcNumber(num,isAdd){
    if(isAdd){
      this.props.increment(num)
    }else{
      this.props.decrement(num)
    }
  }

  render() {
    const {counter}=this.props

    return (
      <div>
        <h2>About Page {counter}</h2>
        <button onClick={(e)=>this.calcNumber(6,true)}>+6</button>
        <button onClick={(e)=>this.calcNumber(16,true)}>+16</button>
        <button onClick={(e)=>this.calcNumber(6,false)}>-6</button>
        <button onClick={(e)=>this.calcNumber(16,false)}>-16</button>
      </div>
    )
  }
}

// ?connect返回一个高阶组件，我们在调用组件，返回一个新的组件
// connect接受两个参数：都是函数
// 参数一：帮助我们映射相应的store中的state数据到组件中的props
// 参数二：帮助我们映射相应的dispatch到组件的props中
const mapStateToProps=state=>{
  return {
    counter:state.counter.counter
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    increment(num){
      dispatch(addNumberAction(num))
    },
    decrement(num){
      dispatch(subNumberAction(num))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About)