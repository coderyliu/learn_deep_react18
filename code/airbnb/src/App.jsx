import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "@/router";

import { useScrollTo } from "./hooks";

// import AppHeader from 'components/app-header'
import AppFooter from "components/app-footer";

const App = memo(() => {
  // 页面跳转。滚动条到顶部
  useScrollTo();

  return (
    <div>
      {/* <AppHeader></AppHeader> */}
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
    </div>
  );
});

export default App;
