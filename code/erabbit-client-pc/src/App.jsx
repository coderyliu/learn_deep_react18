import React, { memo } from "react";
import { useRoutes } from 'react-router-dom'

import routes from './router'

import AppHeader from "./components/common/app-header";
import AppFooter from "./components/common/app-footer";

const App = memo(() => {

  return (
    <div>
      <AppHeader></AppHeader>
      {useRoutes(routes)}
      <AppFooter></AppFooter>
    </div>
  );
});

export default App;
