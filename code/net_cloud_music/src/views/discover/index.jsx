import React, { memo, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { DiscoverWrapper } from './style'

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <div>discover page</div>
      <Outlet></Outlet>
    </DiscoverWrapper>
  )
})

export default Discover