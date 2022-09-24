import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumber } from '../store/counter'

export class Profile extends PureComponent {
  decrement(num){
    this.props.subNumber(num)
  }

  render() {
    const {counter}=this.props

    return (
      <div className='profile'>
        <h2>Profile Counter {counter}</h2>
        <button onClick={(e)=>this.decrement(1)}>-1</button>
        <button onClick={(e)=>this.decrement(5)}>-5</button>
        <button onClick={(e)=>this.decrement(10)}>-10</button>
      </div>
    )
  }
}

const mapStateToProps=state=>({
  counter:state.counter.counter
})

const mapDispatchToProps=dispatch=>({
  subNumber(num){
    dispatch(subNumber(num))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)