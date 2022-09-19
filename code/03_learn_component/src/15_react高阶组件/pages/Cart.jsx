import React, { PureComponent } from 'react'
import EnhancedAuth from '../hoc/enhanced_auth'

export class Cart extends PureComponent {
  render() {
    return (
      <div>
        <h2>Cart Page</h2>
      </div>
    )
  }
}

export default EnhancedAuth(Cart)