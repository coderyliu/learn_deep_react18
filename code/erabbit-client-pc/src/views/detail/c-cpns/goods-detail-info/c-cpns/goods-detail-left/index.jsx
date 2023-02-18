import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { FlagOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

import { GoodsDetailLeftWrapper } from "./style";

const GoodsDetailLeft = memo(() => {
  const [currentPicture, setCurrentPicture] = useState(0);

  // ?redux相关
  const { goodsDetailInfo } = useSelector(
    (state) => ({
      goodsDetailInfo: state.detail.goodsDetailInfo,
    }),
    shallowEqual
  );

  // ?处理图片移入事件
  function handlePictureMove(item) {
    setCurrentPicture(item);
  }

  useEffect(() => {
    if (!Array.isArray(goodsDetailInfo?.mainPictures)) return;

    setCurrentPicture(goodsDetailInfo?.mainPictures[0]);
  }, []);

  return (
    <GoodsDetailLeftWrapper>
      <div className="top-images">
        <div className="covered">
          <img src={currentPicture} alt="" />
        </div>
        <ul className="img-list">
          {goodsDetailInfo?.mainPictures?.map((item, index) => {
            return (
              <li
                key={item}
                className="img-list-item"
                onMouseEnter={() => handlePictureMove(item)}
              >
                <img src={item} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom-desc">
        <div className="bottom-desc-item">
          <p className="desc-title">销量人气</p>
          <p className="desc-count">{goodsDetailInfo?.salesCount}+</p>
          <p className="desc-icon">
            <FlagOutlined />
            <span className="icon-title">销量人气</span>
          </p>
        </div>
        <div className="bottom-desc-item">
          <p className="desc-title">商品评价</p>
          <p className="desc-count">{goodsDetailInfo?.commentCount}+</p>
          <p className="desc-icon">
            <MessageOutlined />
            <span className="icon-title">商品评价</span>
          </p>
        </div>
        <div className="bottom-desc-item">
          <p className="desc-title">收藏人气</p>
          <p className="desc-count">{goodsDetailInfo?.collectCount}+</p>
          <p className="desc-icon">
            <StarOutlined />
            <span className="icon-title">收藏人气</span>
          </p>
        </div>
        <div className="bottom-desc-item">
          <p className="desc-title">品牌信息</p>
          <p className="desc-count omit brand">{goodsDetailInfo?.brand?.name}</p>
          <p className="desc-icon">
            <i className="icon-brand"></i>
            <span className="icon-title">品牌信息</span>
          </p>
        </div>
      </div>
    </GoodsDetailLeftWrapper>
  );
});

GoodsDetailLeft.propTypes = {};

export default GoodsDetailLeft;
