import React, { PureComponent } from 'react'
import withRouter from '../../hoc/widthRouter'

export class Profile extends PureComponent {
  render() {
    const {query}=this.props.router

    return (
      <div>
        <h2>Profile Page</h2>
        <h2>姓名:{query.name}-age:{query.age}</h2>
      </div>
    )
  }
}

export default withRouter(Profile)