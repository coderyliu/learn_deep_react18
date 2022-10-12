import React, { memo } from 'react'
import IconSearchBar from '@/assets/svg/icon-search-bar'

import { CenterHeaderWrapper } from './style'

const CenterHeader = memo(() => {
  return (
    <CenterHeaderWrapper>
      <div className="search-bar">
        <div className="text">
          搜索房源和体验
        </div>
        <div className="icon">
          <IconSearchBar></IconSearchBar>
        </div>
      </div>
    </CenterHeaderWrapper>
  )
})

export default CenterHeader