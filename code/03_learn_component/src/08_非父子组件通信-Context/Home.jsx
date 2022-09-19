import React, { Component } from 'react'
import HomeBanner from './HomeBanner'
import ThemeContext from './context/themeContext'
import HomeInfo from './HomeInfo';

export class Home extends Component {
  render() {
    const {name,age,height}=this.context

    console.log(name,age,height);

    return (
      <div>
        <h2>Home:{this.context.name}</h2>
        <HomeBanner></HomeBanner>
        <HomeInfo></HomeInfo>
      </div>
    )
  }
}

Home.contextType=ThemeContext

export default Home