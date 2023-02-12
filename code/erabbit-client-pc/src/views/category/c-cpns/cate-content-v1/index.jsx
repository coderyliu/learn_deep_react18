import PropTypes from "prop-types";
import React, { memo } from "react";

import CateListV1 from "../cate-list-v1";
import CateHeaderV1 from "../cate-header-v1";
import { CateContentV1Wrapper } from "./style";

const CateContentV1 = memo((props) => {
  const { cateData } = props;

  return (
    <CateContentV1Wrapper>
      {cateData?.children?.map((data) => {
        return (
          <div key={data.id} className="content-outer">
            <div className="content-inner">
              <CateHeaderV1 title={data.name} id={data.id}></CateHeaderV1>
              <CateListV1 listData={data.goods}></CateListV1>
            </div>
          </div>
        );
      })}
    </CateContentV1Wrapper>
  );
});

CateContentV1.propTypes = {
  cateData: PropTypes.object,
};

export default CateContentV1;
