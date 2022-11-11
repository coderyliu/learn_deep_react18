import RadioItemV1 from "@/components/radio-item-v1";
import PropTypes from "prop-types";
import React, { memo } from "react";

import RadioHeader from "../radio-header";
import { SectionItemV1Wrapper } from "./style";

const SectionItemV1 = memo((props) => {
  const { listData } = props;

  return (
    <SectionItemV1Wrapper>
      <RadioHeader title="优秀新电台"></RadioHeader>
      <div className="excellent-wrap">
        {listData?.slice(0, 5)?.map((item, index) => {
          return <RadioItemV1 itemData={item} key={item.id}></RadioItemV1>;
        })}
      </div>
    </SectionItemV1Wrapper>
  );
});

SectionItemV1.propTypes = {
  listData: PropTypes.array,
};

export default SectionItemV1;
