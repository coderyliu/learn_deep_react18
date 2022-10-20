import React, { memo, useEffect, useState } from "react";

import IconAvatar from "@/assets/svg/icon-avatar";
import IconGlobal from "@/assets/svg/icon-global";
import IconMenu from "@/assets/svg/icon-menu";
import { RightHeaderWrapper } from "./style";

const RightHeader = memo(() => {
  // 组件状态
  const [showPanel, setShowPanel] = useState(false);

  // 副作用
  useEffect(() => {
    function handleWindowPanelClick(e) {
      setShowPanel(false);
    }

    window.addEventListener("click", handleWindowPanelClick, true);

    return () => {
      window.removeEventListener("click", handleWindowPanelClick, true);
    };
  }, []);

  // 事件监听
  function handleProfileClick() {
    setShowPanel(true);
  }

  return (
    <RightHeaderWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile" onClick={handleProfileClick}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightHeaderWrapper>
  );
});

export default RightHeader;
