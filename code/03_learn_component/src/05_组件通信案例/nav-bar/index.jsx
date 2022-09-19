import React, { Component } from 'react'

import './style.css'

export class NavBar extends Component {
  constructor(){
    super()

    this.state={
      currentIndex:0
    }
  }

  toggleClick(index){
    this.setState({
      currentIndex:index
    })

    this.props.tabToggle(index)
  }

  render() {
    const {currentIndex}=this.state
    const {tabBar}=this.props

    return (
      <div className='nav-bar'>
        {
          tabBar.map((item,index)=>{
            return (
              <div 
                className='nav-bar-item'
                key={item} 
                onClick={(e)=>this.toggleClick(index)}
              >
                <span className={`item ${currentIndex===index?'active':''}`}>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default NavBar