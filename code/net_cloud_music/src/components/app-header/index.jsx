import React, { memo,useState } from 'react'
import { useNavigate } from 'react-router-dom'

import headerTitle from '@/assets/data/header-title.json'
import headerNav from '@/assets/data/header-nav.json'
import { AppHeaderWrapper } from './style'

const AppHeader = memo(() => {
  const [currentIndex,setCurrentIndex]=useState(0)

  // 路由跳转
  const navigate=useNavigate()
  function navigateTo(path,index){
    setCurrentIndex(index)
    if(!path.isUrl){
      navigate(path.path)
    }
  }

  return (
    <AppHeaderWrapper>
      <div className="header-inner">
        <h1 className="header-left">
          <a href="/">logo</a>
        </h1>
        <ul className="header-center">
          {
            headerTitle.map((item,index)=>{
              return (
                <li 
                  className={currentIndex===index?'item active':'item'}
                  onClick={()=>navigateTo(item,index)}
                  key={item.title}
                >
                  {item.title}
                </li>
              )
            })
          }
        </ul>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder='音乐/视频/电台/用户' className='input' />
          </div>
          <div className="text section">创作者中心</div>
          <div className="login">登录</div>
        </div>
      </div>
    </AppHeaderWrapper>
  )
})

export default AppHeader