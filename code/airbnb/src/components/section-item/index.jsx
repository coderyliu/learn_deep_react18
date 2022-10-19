import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";

import IconLeftArrow from "@/assets/svg/icon-left-arrow";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
import { SectionItemWrapper } from "./style";

const SectionItem = memo((props) => {
  const { itemData, itemWidth, itemClick } = props;
  const sliderRef = useRef();

  // 事件处理 轮播图
  function handleSliderClick(e, isRight = true) {
    e.stopPropagation();
    // 切换上一张/下一张
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
  }

  function handleItemClick(itemData) {
    if (itemClick) itemClick(itemData);
  }

  // 组件
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" className="picture" />
    </div>
  );

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => handleSliderClick(e, false)}>
          <IconLeftArrow width={30} height={30}></IconLeftArrow>
        </div>
        <div className="btn right" onClick={(e) => handleSliderClick(e, true)}>
          <IconRightArrow width={30} height={30}></IconRightArrow>
        </div>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item, index) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" className="picture" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <SectionItemWrapper
      verifyColor={itemData.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="section-item" onClick={(e) => handleItemClick(itemData)}>
        {itemData.picture_urls ? sliderElement : pictureElement}
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            name="read-only"
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ color: "#00848A", fontSize: "12px", marginRight: "-1px" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </SectionItemWrapper>
  );
});

SectionItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick: PropTypes.func,
};

export default SectionItem;
