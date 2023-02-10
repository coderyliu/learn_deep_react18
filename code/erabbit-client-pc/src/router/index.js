import React from 'react'
import { Navigate } from 'react-router-dom'

// 首页相关组价
const Home=React.lazy(()=>import('@/views/home'))

// 分类页相关组件
const Category=React.lazy(()=>import('@/views/category'))

// 详情页相关组件
const Detail=React.lazy(()=>import('@/views/detail'))

// 登录相关组件
const AppLogin=React.lazy(()=>import('@/views/login'))

const routes=[
  {
    path:'/',
    element:<Navigate to='/home'></Navigate>
  },
  {
    path:'/home',
    element:<Home></Home>
  },
  {
    path:'/category/:id',
    element:<Category></Category>
  },
  {
    path:'/detail/:id',
    element:<Detail></Detail>
  },
  {
    path:'/login',
    element:<AppLogin></AppLogin>
  }
]

export default routes