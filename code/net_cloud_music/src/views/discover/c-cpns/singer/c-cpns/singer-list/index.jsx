import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SingerListWrapper } from './style'

const SingerList = memo((props) => {
  const {itemList}=props

  return (
    <SingerListWrapper>
      {
        itemList?.slice(10)?.map((item,index)=>{
          return (
            <div className="singer-wrap" key={item.id}>
              <span className='name'>{item.name}</span>
              <span className='icon'></span>
            </div>
          )
        })
      }
    </SingerListWrapper>
  )
})

SingerList.propTypes = {
  itemList:PropTypes.array
}

export default SingerList