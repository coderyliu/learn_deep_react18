import PropTypes from "prop-types";
import React, { memo } from "react";

import SingerHeader from "../singer-header";
import SingerItem from "../singer-item";
import SingerList from "../singer-list";

import { SingerSectionItemV2Wrapper } from "./style";

const SingerSectionItemV2 = memo((props) => {
  const { itemList, title } = props;

  // 处理渲染逻辑
  let currentElement;
  if (title === "入驻歌手") {
    currentElement = (
      <div className="singer-con">
        {itemList?.slice(0,30)?.map((item, index) => {
          return <SingerItem itemData={item} key={item.id}></SingerItem>;
        })}
      </div>
    );
  } else {
    currentElement = (
      <div className="singer-con">
        {itemList?.slice(0, 10)?.map((item, index) => {
          return <SingerItem itemData={item} key={item.id}></SingerItem>;
        })}
      </div>
    );
  }

  return (
    <SingerSectionItemV2Wrapper>
      <SingerHeader title={title} isShowMore={false}></SingerHeader>
      {currentElement}
      {title === "推荐歌手" ? (
        <SingerList itemList={itemList}></SingerList>
      ) : (
        ""
      )}
    </SingerSectionItemV2Wrapper>
  );
});

SingerSectionItemV2.propTypes = {
  itemList: PropTypes.array,
  title: PropTypes.string,
};

export default SingerSectionItemV2;
