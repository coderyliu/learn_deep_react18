import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SingerWrapper } from './style'

const Singer = memo((props) => {
  return (
    <SingerWrapper>
      <div>singer page</div>
    </SingerWrapper>
  )
})

Singer.propTypes = {}

export default Singer