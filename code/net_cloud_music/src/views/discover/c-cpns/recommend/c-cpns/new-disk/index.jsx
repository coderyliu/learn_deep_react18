import PropTypes from 'prop-types'
import React, { memo } from 'react'

import HeaderSection from '../header-section'
import { NewDiskWrapper } from './style'

const NewDisk = memo((props) => {
  return (
    <NewDiskWrapper>
      <HeaderSection title='新碟上架'></HeaderSection>
    </NewDiskWrapper>
  )
})

NewDisk.propTypes = {}

export default NewDisk