import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { OrderWrapper } from './style'

const Order = memo((props) => {
  return (
    <OrderWrapper>
      <h2>Order center</h2>
    </OrderWrapper>
  )
})

Order.propTypes = {}

export default Order