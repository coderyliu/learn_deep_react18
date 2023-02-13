import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

import { MineWrapper } from './style'

const Mine = memo(() => {
  return (
    <MineWrapper>
      <Outlet></Outlet>
    </MineWrapper>
  )
})

export default Mine