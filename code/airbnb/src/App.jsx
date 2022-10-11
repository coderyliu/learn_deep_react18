import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

const App = memo(() => {
  return (
    <div>
      <div className="header">
        <h2>头部</h2>
      </div>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <h2>底部</h2>
      </div>
    </div>
  )
})

export default App