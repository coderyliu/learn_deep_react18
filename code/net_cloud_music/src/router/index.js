import React from 'react'
import { Navigate } from 'react-router-dom'

// 首页相关
const Discover=React.lazy(()=>import('views/discover'))
const Ranking=React.lazy(()=>import('views/discover/c-cpns/ranking'))
const Recommend=React.lazy(()=>import('views/discover/c-cpns/recommend'))
const SongMenu=React.lazy(()=>import('views/discover/c-cpns/song-menu'))
const RadioStation=React.lazy(()=>import('views/discover/c-cpns/radio-station'))
const Singer=React.lazy(()=>import('views/discover/c-cpns/singer'))
const Disk=React.lazy(()=>import('views/discover/c-cpns/disk'))

// 我的音乐
const Mine=React.lazy(()=>import('views/mine'))

const routes=[
  {
    path:'/',
    element:<Navigate to='/discover'></Navigate>
  },
  {
    path:'/discover',
    element:<Discover></Discover>,
    children:[
      {
        path:'/discover',
        element:<Navigate to='/discover/recommend'></Navigate>
      },
      {
        path:'/discover/recommend',
        element:<Recommend></Recommend>
      },
      {
        path:'/discover/toplist',
        element:<Ranking></Ranking>
      },
      {
        path:'/discover/songMenu',
        element:<SongMenu></SongMenu>
      },
      {
        path:'/discover/radio',
        element:<RadioStation></RadioStation>
      },
      {
        path:'/discover/singer',
        element:<Singer></Singer>
      },
      {
        path:'/discover/disk',
        element:<Disk></Disk>
      }
    ]
  },
  {
    path:'/profile',
    element:<Mine></Mine>
  }
]

export default routes