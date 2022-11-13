import React from 'react'
import { Navigate } from 'react-router-dom'

// 首页相关
const Discover=React.lazy(()=>import(/* webpackChunkName:'discover' */'views/discover'))
const Ranking=React.lazy(()=>import(/* webpackChunkName:'ranking' */'views/discover/c-cpns/ranking'))
const Recommend=React.lazy(()=>import(/* webpackChunkName:'recommend' */'views/discover/c-cpns/recommend'))
const SongMenu=React.lazy(()=>import(/* webpackChunkName:'songMenu' */'views/discover/c-cpns/song-menu'))
const RadioStation=React.lazy(()=>import(/* webpackChunkName:'radio' */'views/discover/c-cpns/radio-station'))
const Singer=React.lazy(()=>import(/* webpackChunkName:'singer' */'views/discover/c-cpns/singer'))
const Disk=React.lazy(()=>import(/* webpackChunkName:'disk' */'views/discover/c-cpns/disk'))
const Player=React.lazy(()=>import('views/player'))

// 我的音乐
const Mine=React.lazy(()=>import(/* webpackChunkName:'mine' */'views/mine'))

// 关注
const Focus =React.lazy(()=>import(/* webpackChunkName:'focus' */'views/focus'))

// 下载客户端
const Download=React.lazy(()=>import(/* webpackChunkName:'download' */'views/download'))

// 登录注册
const Login=React.lazy(()=>import(/* webpackChunkName:'login' */'views/login'))

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
  },
  {
    path:'/focus',
    element:<Focus></Focus>
  },
  {
    path:'/download',
    element:<Download></Download>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/song/:id',
    element:<Player></Player>
  }
]

export default routes