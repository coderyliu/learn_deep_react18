import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'
import { changeBanners, changeRecommends, fetchHomeMultdata } from '../store/home'

export class About extends PureComponent {
  componentDidMount(){
    this.props.fetchHomeData()
  }

  render() {
    const {counter,banners,recommends}=this.props

    return (
      <div>
        <h2>About Counter {counter}</h2>
        <h2>轮播图数据</h2>
        <ul>
          {
            banners.map((item,index)=>{
              return (
                <li key={index}>{item.title}</li>
              )
            })
          }
        </ul>
        <h2>推荐数据</h2>
        <ul>
          {
            recommends.map((item,index)=>{
              return (
                <li key={index}>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps=state=>({
  counter:state.counter.counter,
  banners:state.home.banners,
  recommends:state.home.recommends
})

const mapDispatchToProps=dispatch=>({
  changeBanners(banners){
    dispatch(changeBanners(banners))
  },
  changeRecommends(recommends){
    dispatch(changeRecommends(recommends))
  },
  fetchHomeData(){
    dispatch(fetchHomeMultdata({name:'CODER',age:21}))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(About)