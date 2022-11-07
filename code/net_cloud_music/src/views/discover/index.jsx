import React, { memo, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { DiscoverWrapper } from './style'

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <Outlet></Outlet>
    </DiscoverWrapper>
  )
})

export default Discover