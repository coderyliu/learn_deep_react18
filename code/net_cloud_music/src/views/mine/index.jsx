import React, { memo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { changeIsShowLoginAction } from "@/store/modules/main";

import { MineWrapper } from "./style";

const Mine = memo(() => {
  // ?redux相关
  const { token } = useSelector(
    (state) => ({
      token: state.main.token,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  function handleLoginClick() {
    dispatch(changeIsShowLoginAction(true));
  }

  return (
    <MineWrapper>
      {!token && (
        <div className="login-wrap">
          <div className="login_cover"></div>
          <div className="login_btn" onClick={() => handleLoginClick()}>
            立即登录
          </div>
        </div>
      )}
      {token && <h2>页面开发中</h2>}
    </MineWrapper>
  );
});

export default Mine;
