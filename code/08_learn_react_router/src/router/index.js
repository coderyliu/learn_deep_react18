// ?react-router 6.x的版本给我们提供了useRoutes()函数，帮助我们把我们的routes数组转化为组件
// 在react-router 6版本以前需要通过一个插件（第三方库）react-router-config来完成
import React from "react";
import { Navigate } from "react-router-dom";

// 组件懒加载
const Home = React.lazy(() => import("../pages/home"));
const HomeRecommend = React.lazy(() =>
  import("../pages/home/child/HomeRecommend")
);
const HomeSongMenu = React.lazy(() =>
  import("../pages/home/child/HomeSongMenu")
);

const Profile = React.lazy(() => import("../pages/profile"));

const Detail = React.lazy(() => import("../pages/detail"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home></Home>,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend"></Navigate>,
      },
      {
        path: "/home/recommend",
        element: <HomeRecommend></HomeRecommend>,
      },
      {
        path: "/home/song/menu",
        element: <HomeSongMenu></HomeSongMenu>,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/detail/:id",
    element: <Detail></Detail>,
  },
];

export default routes;
