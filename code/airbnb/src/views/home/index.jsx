import React, { memo, useEffect, useState } from 'react'
import lyRequest from '@/network'

const Home = memo(() => {
  // 组件状态
  const [highScore,setHighScore]=useState({})

  // 网络请求
  useEffect(()=>{
    lyRequest.get({url:'/home/highscore'}).then(res=>{
      setHighScore(res)
    })
  },[])

  return (
    <div>
      <h2>Home Page</h2>
      <h2>{highScore.title}</h2>
      <h3>{highScore.subtitle}</h3>
      <ul>
        {
          highScore?.list?.map(item=>{
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home