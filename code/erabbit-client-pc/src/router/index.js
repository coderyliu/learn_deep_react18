import React from 'react'
import { Navigate } from 'react-router-dom'

// 首页相关组价
const Home=React.lazy(()=>import('@/views/home'))

const routes=[
  {
    path:'/',
    element:<Navigate to='/home'></Navigate>
  },
  {
    path:'/home',
    element:<Home></Home>
  }
]

export default routes