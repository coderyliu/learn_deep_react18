import React, { Component } from 'react'

export class MainBanner extends Component {
  constructor(){
    super()

    this.state={
      banners:['面包','粥','饮料','早点'],
    }
  }

  render() {
    const {banners}=this.state

    return (
      <div>
        <h2>轮播图</h2>
        <ul>
          {
            banners.map((item)=>{
              return (
                <li>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainBanner