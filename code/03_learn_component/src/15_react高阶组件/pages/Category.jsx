import React, { PureComponent } from 'react'
import EnhancedLifeCircle from '../hoc/enhanced_lifeCircle'

export class Category extends PureComponent {
  render() {
    return (
      <div>Category Page</div>
    )
  }
}

export default EnhancedLifeCircle(Category)