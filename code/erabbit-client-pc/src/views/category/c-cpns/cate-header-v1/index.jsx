import PropTypes from "prop-types";
import React, { memo } from "react";

import { CateHeaderV1Wrapper } from "./style";

const CateHeaderV1 = memo((props) => {
  const { title, subtitle = "温暖柔软，品质之选", id } = props;

  // ?点击查看更多
  function handleLoadMore() {
    console.log(id);
  }

  return (
    <CateHeaderV1Wrapper>
      <div className="title-wrap">
        <h2 className="title">- {title} -</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
      <p className="more" onClick={() => handleLoadMore()}>
        查看全部 &gt;
      </p>
    </CateHeaderV1Wrapper>
  );
});

CateHeaderV1.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  id: PropTypes.string,
};

export default CateHeaderV1;
