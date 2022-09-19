import React, { PureComponent } from 'react'

import proStyle from './style.module.css'

export class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={proStyle.title}>Profile Page</h2>
      </div>
    )
  }
}

export default Profile