import SectionItemV1 from '@/components/section-item-v1'
import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'

import HeaderSection from '../../../../../../components/header-section'
import { HotRecommendWrapper } from './style'

const HotRecommend = memo((props) => {
  const {hotRecommend}=props

  // 处理更多点击 父子组件之间的通信
  const handleMoreTap=useCallback(()=>{
    console.log(1)
  })

  return (
    <HotRecommendWrapper>
      <HeaderSection title='热门推荐' moreClick={handleMoreTap}></HeaderSection>
      <SectionItemV1 itemData={hotRecommend.slice(0,8)}></SectionItemV1>
    </HotRecommendWrapper>
  )
})

HotRecommend.propTypes = {
  hotRecommend:PropTypes.array
}

export default HotRecommend