import React, { memo } from "react";
import { Outlet } from "react-router-dom";

import useScrollPosition from "@/hooks/useScrollPosition";

import { DiscoverWrapper } from "./style";

const Discover = memo(() => {
  // 监听scroll滚动
  const { scrollY } = useScrollPosition();

  return (
    <DiscoverWrapper>
      <Outlet></Outlet>
      {scrollY > 100 && <a href="#" className="btn-back"></a>}
    </DiscoverWrapper>
  );
});

export default Discover;
