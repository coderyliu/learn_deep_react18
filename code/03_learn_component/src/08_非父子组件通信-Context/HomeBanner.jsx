import React, { Component } from 'react'
import ThemeContext from './context/themeContext';

export class HomeBanner extends Component {
  render() {

    console.log(this.context);
    return (
      <div>
        <h2>HomeBanner</h2>
      </div>
    )
  }
}

// ?即使父组件指定了contextType,子孙组件所有都要指定
HomeBanner.contextType=ThemeContext

export default HomeBanner