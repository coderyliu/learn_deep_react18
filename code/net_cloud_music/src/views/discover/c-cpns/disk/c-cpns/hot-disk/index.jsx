import PropTypes from "prop-types";
import React, { memo } from "react";

import HeaderSection from "@/components/header-section";
import NewDiskItemV1 from "@/components/disk-item-v1";
import { HotDiskWrapper } from "./style";

const HotDisk = memo((props) => {
  const { hotDiskList } = props;

  return (
    <HotDiskWrapper>
      <HeaderSection title="热门新碟" isShowMore={false}></HeaderSection>
      <div className="content-wrap">
        {hotDiskList?.slice(0, 10)?.map((item, index) => {
          return (
            <NewDiskItemV1
              itemData={item}
              key={index}
              itemWidth={150}
              itemHeight={130}
              imgWidth={100}
              paddingLeft={30}
            ></NewDiskItemV1>
          );
        })}
      </div>
    </HotDiskWrapper>
  );
});

HotDisk.propTypes = {
  hotDiskList: PropTypes.array,
};

export default HotDisk;
