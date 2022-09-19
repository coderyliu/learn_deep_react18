import React, { PureComponent } from 'react'

export class Home extends PureComponent {

  // ?子组件自己判断state,props是否改变
  // shouldComponentUpdate(newProps,newState,nextContext){
  //   console.log(newProps,newState,nextContext);

  //   if(this.props.message!==newProps.message){
  //     return true
  //   }

  //   return false
  // }

  render() {
    console.log('Home render');

    return (
      <div>
        <h2>Home Page</h2>
      </div>
    )
  }
}

export default Home