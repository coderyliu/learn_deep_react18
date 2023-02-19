import PropTypes from "prop-types";
import React, { memo } from "react";
import { AppstoreOutlined } from "@ant-design/icons";

import AppSwiperV2 from "@/components/base-ui/app-swiper-v2";
import CateListItemV1 from "@/components/common/cate-list-item-v1";
import { SameGoodsRecommendWrapper } from "./style";

const SameGoodsRecommend = memo((props) => {
  const { recommendList, title = "同类商品推荐" } = props;

  return (
    <SameGoodsRecommendWrapper>
      <div className="recommend-wrap">
        <div className="top-wrap">
          <AppstoreOutlined />
          <span className="sign-title">{title}</span>
        </div>
        <AppSwiperV2
          indicatorList={recommendList}
          isHaveLeftDistance={false}
          swiperHeight={380}
          indicatorActiveColor={"27ba9b"}
          isHiddenControl={false}
        >
          {recommendList?.map((list, index) => {
            return (
              <ul className="recommend-item" key={index}>
                {list?.map((item) => {
                  return (
                    <CateListItemV1
                      dataInfo={item}
                      key={item.id}
                      isShowDesc={false}
                      isTriggerHover={false}
                      wrapWidth={240}
                      wrapHeight={280}
                      imgWidth={190}
                      imgHeight={190}
                      nameColor={666}
                    ></CateListItemV1>
                  );
                })}
              </ul>
            );
          })}
        </AppSwiperV2>
      </div>
    </SameGoodsRecommendWrapper>
  );
});

SameGoodsRecommend.propTypes = {
  recommendList: PropTypes.array,
  title: PropTypes.string,
};

export default SameGoodsRecommend;
