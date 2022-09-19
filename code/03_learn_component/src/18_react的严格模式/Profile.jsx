import React, { PureComponent } from 'react'

export class Profile extends PureComponent {
  UNSAFE_componentWillMount(){
    console.log('profile');
  }

  render() {
    console.log('Profile Render');
    return (
      <div><h2>Profile Page</h2></div>
    )
  }
}

export default Profile