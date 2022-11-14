import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { changeIsShowLoginAction } from "@/store/modules/main";

import { FocusWrapper } from "./style";

const Focus = memo(() => {
  // ?登录逻辑
  const { token } = useSelector((state) => ({
    token: state.main.token,
  }),shallowEqual);
  const dispatch=useDispatch()

  function handleLoginClick(){
    dispatch(changeIsShowLoginAction(true))
  }

  return (
    <FocusWrapper>
      {!token && (
        <div className="login-wrap">
          <div className="login_cover"></div>
          <div className="desc">
            你可以关注明星和好友品味他们的私房歌单
            <br />
            通过他们的动态发现更多精彩音乐
          </div>
          <div className="login_btn" onClick={()=>handleLoginClick()}>立即登录</div>
        </div>
      )}
      {token && <h2>页面开发中</h2>}
    </FocusWrapper>
  );
});

export default Focus;
