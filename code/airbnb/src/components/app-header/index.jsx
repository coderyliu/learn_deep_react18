import React, { memo } from 'react'

import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/left-header'
import HeaderCenter from './c-cpns/center-header'
import HeaderRight from './c-cpns/right-header'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})

export default AppHeader