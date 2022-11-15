import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { changeIsShowVipAction } from "@/store/modules/main";

import { VipModalWrapper } from "./style";

const VipModal = memo((props) => {
  // redux相关
  const { isShowVipModal } = useSelector(
    (state) => ({
      isShowVipModal: state.main.isShowVipModal,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // ?关闭弹出框
  function handleCloseClick() {
    dispatch(changeIsShowVipAction(false));
  }

  // ?开通Vip服务
  function handleOpenClick() {
    console.log("功能开发中");
    dispatch(changeIsShowVipAction(false));
  }

  return (
    <div>
      {isShowVipModal && (
        <VipModalWrapper>
          <div className="top">
            <span className="vip">开通会员</span>
            <span
              className="close-btn"
              onClick={() => handleCloseClick()}
            ></span>
          </div>
          <div className="content">
            <h3 className="tip">该资源为VIP专享，开通VIP畅通无阻</h3>
            <ul className="list">
              <li className="item">
                <img src={require("@/assets/img/vip_music.png")} alt="" />
                <span className="info">VIP 专属曲库</span>
              </li>
              <li className="item">
                <img src={require("@/assets/img/vip_download.png")} alt="" />
                <span className="info">千万歌曲免费下载</span>
              </li>
              <li className="item">
                <img src={require("@/assets/img/vip_sound.png")} alt="" />
                <span className="info">无损音质</span>
              </li>
            </ul>
            <div className="open-btn" onClick={() => handleOpenClick()}>
              新课2.8元开通
            </div>
          </div>
        </VipModalWrapper>
      )}
    </div>
  );
});

export default VipModal;
