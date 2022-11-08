import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'

import HeaderSection from '../../../../../../components/header-section'
import NewDiskItemV1 from '@/components/disk-item-v1'
import { NewDiskWrapper } from './style'

const NewDisk = memo((props) => {
  const {newDisk}=props

  // 处理slider control点击
  const [sliderIndex,setSliderIndex]=useState(0)
  const sliderRef=useRef()
  function handleSliderClick(isRight=true){
    let index;
    if(isRight){
      index=sliderIndex===1?sliderIndex-1:sliderIndex+1
    }else{
      index=sliderIndex===0?sliderIndex+1:sliderIndex-1
    }
    setSliderIndex(index)
    sliderRef.current.style.left=`-${index*100}%`
  }

  return (
    <NewDiskWrapper>
      <HeaderSection title='新碟上架'></HeaderSection>
      <div className="slider-wrap">
        <div className="control">
          <div className="control-left" onClick={()=>handleSliderClick(false)}></div>
          <div className="control-right" onClick={()=>handleSliderClick(true)}></div>
        </div>
        <div className="slider">
          <div className="slider-inner" ref={sliderRef}>
            {
              newDisk.map((item,index)=>{
                return <NewDiskItemV1 itemData={item} key={item.name}></NewDiskItemV1>
              })
            }
          </div>
        </div>
      </div>
    </NewDiskWrapper>
  )
})

NewDisk.propTypes = {
  newDisk:PropTypes.array
}

export default NewDisk