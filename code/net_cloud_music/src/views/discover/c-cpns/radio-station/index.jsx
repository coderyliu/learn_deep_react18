import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { RadioStationWrapper } from './style'

const RadioStation = memo((props) => {
  return (
    <RadioStationWrapper>
      <h2>radio station wrapper</h2>
    </RadioStationWrapper>
  )
})

RadioStation.propTypes = {}

export default RadioStation