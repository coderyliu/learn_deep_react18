import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'

import AppHeader from './components/app-header'
import { AppWrapper } from './style'

const App = memo(() => {
  return (
    <AppWrapper>
      <AppHeader></AppHeader>
      <div className="content">
        {useRoutes(routes)}
      </div>
    </AppWrapper>
  )
})

export default App