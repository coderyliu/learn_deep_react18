import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  constructor(props){
    super(props)

    this.state={
      banners:['面包','粥','饮料','早点'],
    }
  }

  render() {
    // const {banners}=this.state

    // todo 拿到props中的数据
    console.log(this.props);
    const {banners,title}=this.props

    return (
      <div>
        <h2>轮播图:{title}</h2>
        <ul>
          {
            banners.map((item)=>{
              return (
                <li key={item.title}>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

MainBanner.propTypes={
  title:PropTypes.string
}

MainBanner.defaultProps={
  title:'默认数据'
}

export default MainBanner