import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SongPlayListWrapper } from './style'

const SongPlayList = memo((props) => {
  const { playlist }=props

  return (
    <SongPlayListWrapper>
      <div className="top">包含这首歌的歌单</div>
      <div className="play-list">
        {
          playlist?.map((item,index)=>{
            return (
              <div className='item' key={item.id}>
                <div className="avatar">
                  <img src={item.coverImgUrl} alt="" />
                </div>
                <div className="info">
                  <div className="name omit">{item.name}</div>
                  <div className="creator omit">by {item.creator.nickname}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </SongPlayListWrapper>
  )
})

SongPlayList.propTypes = {
  playlist:PropTypes.array
}

export default SongPlayList