import PropTypes from "prop-types";
import React, { memo } from "react";

import { HomeListItemV1Wrapper } from "./style";

const HomeListItemV1 = memo((props) => {
  const { dataInfo } = props;

  return (
    <HomeListItemV1Wrapper>
      <div className="picture">
        <img src={dataInfo.picture} alt="" />
      </div>
      <div className="desc">
        <div className="content omit">{dataInfo.name || dataInfo.title}</div>
        {dataInfo.price && <div className="price">￥{dataInfo.price}</div>}
        {dataInfo.alt && <div className="alt">{dataInfo.alt}</div>}
      </div>
    </HomeListItemV1Wrapper>
  );
});

HomeListItemV1.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeListItemV1;
