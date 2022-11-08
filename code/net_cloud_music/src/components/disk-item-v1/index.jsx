import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { NewDiskItemV1Wrapper } from './style'

const NewDiskItemV1 = memo((props) => {
  const {itemData}=props

  return (
    <NewDiskItemV1Wrapper itemWidth='118'>
      <div className="inner">
        <div className="bg-cover">
          <img src={itemData.artist.picUrl} alt="" />
        </div>
        <div className="info">
          <span className='song omit'>{itemData.name}</span>
          <span className="singer">{itemData.artist.name}</span>
        </div>
      </div>
    </NewDiskItemV1Wrapper>
  )
})

NewDiskItemV1.propTypes = {
  itemData:PropTypes.object
}

export default NewDiskItemV1