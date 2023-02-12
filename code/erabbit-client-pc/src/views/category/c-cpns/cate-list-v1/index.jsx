import PropTypes from "prop-types";
import React, { memo } from "react";

import { CateListV1Wrapper } from "./style";
import CateListItemV1 from "@/components/common/cate-list-item-v1";

const CateListV1 = memo((props) => {
  const { listData } = props;

  return (
    <CateListV1Wrapper>
      {listData?.map((item) => {
        return <CateListItemV1 key={item.id} dataInfo={item}></CateListItemV1>;
      })}
    </CateListV1Wrapper>
  );
});

CateListV1.propTypes = {
  listData: PropTypes.array,
};

export default CateListV1;
