import PropTypes from "prop-types";
import React, { memo } from "react";

import SingerHeader from "../singer-header";
import SingerItem from "../singer-item";
import SingerList from "../singer-list";

import { SingerSectionItemV1Wrapper } from "./style";

const SingerSectionItemV1 = memo((props) => {
  const { itemList } = props;

  return (
    <SingerSectionItemV1Wrapper>
      <SingerHeader title='推荐歌手' isShowMore={false}></SingerHeader>
      <div className="singer-con">
        {itemList?.slice(0, 10)?.map((item, index) => {
          return <SingerItem itemData={item} key={item.id}></SingerItem>;
        })}
      </div>
      <SingerList itemList={itemList}></SingerList>
    </SingerSectionItemV1Wrapper>
  );
});

SingerSectionItemV1.propTypes = {
  itemList: PropTypes.array,
};

export default SingerSectionItemV1;
