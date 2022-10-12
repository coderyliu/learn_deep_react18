import React, { memo } from 'react'

import { BannerWrapper } from './style'
// import CoverBanner from '@/assets/img/cover_01.jpeg'

const HomeBanner = memo(() => {
  return (
    <BannerWrapper>
      {/* 注意：react项目的脚手架基于webpack，webpack不识别字符串路径，必须使用import导入，但是vue中不用，因为vue集成了功能 */}
      {/* <img src="../../../../assets/img/cover_01.jpeg" alt="" /> */}
      {/* 1.import导入 */}
      {/* <img src={CoverBanner} alt="" /> */}
      {/* 2.require */}
      {/* <img src={require('@/assets/img/cover_01.jpeg')} alt="" /> */}
    </BannerWrapper>
  )
})

export default HomeBanner