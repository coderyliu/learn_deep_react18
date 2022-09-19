import React, { PureComponent } from 'react'

export class Profile extends PureComponent {

  // ?子组件也得这样做一个判断
  // shouldComponentUpdate(newProps,newState,nextContext){
  //   console.log(newProps,newState,nextContext);

  //   if(this.props.counter!==newProps.counter){
  //     return true
  //   }

  //   return false
  // }

  render() {
    console.log('profile render');

    return (
      <div>
        <h2>Profile Page</h2>
      </div>
    )
  }
}

export default Profile