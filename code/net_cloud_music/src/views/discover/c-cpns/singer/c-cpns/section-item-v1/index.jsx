import PropTypes from "prop-types";
import React, { memo } from "react";

import SingerHeader from "../singer-header";
import SingerIndicator from "../singer-indicator";
import SingerItem from "../singer-item";
import SingerList from "../singer-list";

import { SingerSectionItemV1Wrapper } from "./style";

const SingerSectionItemV1 = memo((props) => {
  const { itemList, title } = props;

  return (
    <SingerSectionItemV1Wrapper>
      <SingerHeader title={title} isShowMore={false}></SingerHeader>
      <SingerIndicator></SingerIndicator>
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
  title: PropTypes.string,
};

export default SingerSectionItemV1;
