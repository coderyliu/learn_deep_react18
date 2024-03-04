import React from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useRoutes,
  useNavigate,
} from "react-router-dom";
// import Detail from "./pages/detail";
// import Home from "./pages/home";
// import HomeRecommend from "./pages/home/child/HomeRecommend";
// import HomeSongMenu from "./pages/home/child/HomeSongMenu";
// import Profile from "./pages/profile";
// import About from './pages/about'
// import NotFound from './components/NotFound'
import routes from "./router";

// ?useRoutes是一个hooks，hooks的使用只能在函数式组件或者其他hooks中，而不能在class组件中使用
export function App(props) {
  // hooks的使用
  const navigate = useNavigate();

  function navigateToOthers(path) {
    navigate(path);
  }

  return (
    <div>
      <div className="header">
        <h1>Header</h1>
        {/* Link组件提供给我们用于路由跳转，实际上还有API的跳转方式,类似于vue-router的组件router-link */}
        {/* Link会被渲染为a标签，但是不能渲染成其他的元素 to跳转的路径 replace是否有记录，默认为false */}
        <Link to="/about" replace={true}>
          关于
        </Link>
        {/* 这样传递参数，query */}
        <Link to="/profile?name=coder&age=21">用户</Link>

        {/* 当然我们也可以通过API的方式跳转路由 */}
        <button onClick={(e) => navigateToOthers("/home/song/menu")}>
          歌曲分类
        </button>
        <hr />
      </div>
      <div className="content">
        <h1>Content Wrapper</h1>
        {/* 在react-router 6.x中的基本使用 */}
        {/* <Routes>
        <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path='/home' element={<Navigate to='/home/recommend'></Navigate>}></Route>
          <Route path='/home/recommend' element={<HomeRecommend></HomeRecommend>}></Route>
          <Route path='/home/song/menu' element={<HomeSongMenu></HomeSongMenu>}></Route>
        </Route>
        <Route path='/detail/:id' element={<Detail></Detail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes> */}

        {/* 上面那种做法等价于下面这种，useRoutes会返回给我们一个组件，这个组件就是<Routes>包裹的<Route></Route></Routes> */}
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <hr />
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
