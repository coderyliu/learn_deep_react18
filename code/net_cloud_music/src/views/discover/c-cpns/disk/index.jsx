import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { DiskWrapper } from './style'

const Disk = memo((props) => {
  return (
    <DiskWrapper>
      <div>disk page</div>
    </DiskWrapper>
  )
})

Disk.propTypes = {}

export default Disk