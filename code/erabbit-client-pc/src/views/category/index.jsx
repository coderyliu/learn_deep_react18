import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

import { CategoryWrapper } from './style'

const Category = memo(() => {
  // ?路由
  const params=useParams()

  return (
    <CategoryWrapper>
      <h2>分类页</h2>
    </CategoryWrapper>
  )
})

export default Category