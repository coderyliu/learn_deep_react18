import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { PlayerSectionWrapper } from './style'

const PlayerSection = memo((props) => {
  const {rankingDetail}=props

  return (
    <PlayerSectionWrapper>
      
    </PlayerSectionWrapper>
  )
})

PlayerSection.propTypes = {
  rankingDetail:PropTypes.object
}

export default PlayerSection