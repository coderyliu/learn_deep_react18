import React from 'react'
import { Navigate } from 'react-router-dom'

// 首页相关组价
const Home=React.lazy(()=>import('@/views/home'))

// 分类页相关组件
const Category=React.lazy(()=>import('@/views/category'))

// 详情页相关组件
const Detail=React.lazy(()=>import('@/views/detail'))

// 个人中心相关组件
const Mine=React.lazy(()=>import('@/views/mine'))
const Profile=React.lazy(()=>import('@/views/mine/c-cpns/profile'))
const Order=React.lazy(()=>import('@/views/mine/c-cpns/order'))
const VipCenter=React.lazy(()=>import('@/views/mine/c-cpns/vip-center'))
const HelpCenter=React.lazy(()=>import('@/views/mine/c-cpns/help-center'))
const About=React.lazy(()=>import('@/views/mine/c-cpns/about'))

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
    path:'/mine',
    element:<Mine></Mine>,
    children:[
      {
        path:'/mine',
        element:<Navigate to='/mine/profile'></Navigate>
      },
      {
        path:'/mine/profile',
        element:<Profile></Profile>
      },
      {
        path:'/mine/order',
        element:<Order></Order>
      },
      {
        path:'/mine/vip',
        element:<VipCenter></VipCenter>
      },
      {
        path:'/mine/help',
        element:<HelpCenter></HelpCenter>
      },
      {
        path:'/mine/about',
        element:<About></About>
      }
    ]
  },
  {
    path:'/login',
    element:<AppLogin></AppLogin>
  }
]

export default routes