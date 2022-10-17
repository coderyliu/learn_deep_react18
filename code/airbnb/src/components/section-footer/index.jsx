import PropTypes from 'prop-types'
import React, { memo } from 'react'

import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const {name}=props

  // 对展示的名字作处理
  let showName='显示全部'
  if(name){
    showName=`查看更多${name}中心房源`
  }

  return (
    <SectionFooterWrapper>
      <div className="show-name">
        <span className='name'>{showName}</span>
        <IconMoreArrow></IconMoreArrow>
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name:PropTypes.string
}

export default SectionFooter