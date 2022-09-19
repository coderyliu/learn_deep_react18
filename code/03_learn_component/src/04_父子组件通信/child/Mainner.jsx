import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProduct from './MainProduct'
import axios from 'axios'
import MainCounter from './MainCounter'

export class Mainner extends Component {
  constructor(){
    super()

    this.state={
      banners:[],
      products:[],
      counter:0
    }
  }

  componentDidMount(){
    axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
      this.setState({
        banners:res.data.data.banner.list,
        products:res.data.data.recommend.list
      })
    })
  }

  increment(count){
    this.setState({
      counter:this.state.counter+count
    })
  }

  decrement(count){
    this.setState({
      counter:this.state.counter-count
    })
  }

  render() {
    // ?在react中父子组件之间的通信方式都是通过props来实现的
    // ?父传子：直接传递子组件要接受的数据就可以了，这些保存在组件的props中
    // ?子传父：需要父组件传递给子组件一个函数，子组件变化时，通知父组件触发函数执行
    const {banners,products,counter}=this.state

    return (
      <div>
        <MainBanner banners={banners}></MainBanner>
        <MainProduct></MainProduct>
        <MainCounter counter={counter} increment={(count)=>this.increment(count)} decrement={(count)=>this.decrement(count)}></MainCounter>
      </div>
    )
  }
}

export default Mainner