import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'

const App = memo(() => {
  return (
    <div className="content">
      {useRoutes(routes)}
    </div>
  )
})

export default App