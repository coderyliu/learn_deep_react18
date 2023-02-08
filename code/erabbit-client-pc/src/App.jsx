import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useRoutes } from 'react-router-dom'

import routes from './router'

import { fetchHomeData } from "./store/modules/home";

import AppHeader from "./components/common/app-header";
import AppFooter from "./components/common/app-footer";

const App = memo(() => {
  const { newFreshData } = useSelector(
    (state) => ({
      newFreshData: state.home.newFreshData,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeData());
  },[dispatch]);

  return (
    <div>
      <AppHeader></AppHeader>
      {useRoutes(routes)}
      <AppFooter></AppFooter>
    </div>
  );
});

export default App;
