import React, { Component } from 'react'
import UserContext from './context/userContext'

export class Profile extends Component {
  render() {
    console.log(this.context)

    return (
      <div>
        <h2>Profile</h2>
      </div>
    )
  }
}

Profile.contextType=UserContext

export default Profile