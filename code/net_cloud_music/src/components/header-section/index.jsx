import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { HeaderSectionWrapper } from './style'

const HeaderSection = memo((props) => {
  const {title,moreClick,keyword=[]}=props

  // 更多点击处理
  function handleMoreClick(){
    moreClick()
  }

  return (
    <HeaderSectionWrapper>
      <div className="section-left">
        <div className="title">{title}</div>
        <div className="keyword">
          {/* {
            keyword.map((item,index)=>{
              return (
                <div>
                  <span>{item}</span>
                </div>
              )
            })
          } */}
        </div>
      </div>
      <div className="section-right">
        <span className='text' onClick={()=>handleMoreClick()}>更多</span>
        <i className='icon'></i>
      </div>
    </HeaderSectionWrapper>
  )
})

HeaderSection.propTypes={
  title:PropTypes.string,
  moreClick:PropTypes.func
}

export default HeaderSection