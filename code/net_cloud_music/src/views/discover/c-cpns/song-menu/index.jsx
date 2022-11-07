import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SongMenuWrapper } from './style'

const SongMenu = memo((props) => {
  return (
    <SongMenuWrapper>
      <div>
        song menu page
      </div>
    </SongMenuWrapper>
  )
})

SongMenu.propTypes = {}

export default SongMenu