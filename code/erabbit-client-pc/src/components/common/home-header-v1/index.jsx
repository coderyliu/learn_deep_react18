import PropTypes from "prop-types";
import React, { memo } from "react";

import { HomeHeaderV1Wrapper } from "./style";

const HomeHeaderV1 = memo((props) => {
  const { title,desc }=props

  return (
    <HomeHeaderV1Wrapper>
      <div className="left">
        <h2 className='header-title'>{title}</h2>
        <p className="header-desc">{desc}</p>
      </div>
      <div className="center">

      </div>
      <div className="right">
        
      </div>
    </HomeHeaderV1Wrapper>
  );
});

HomeHeaderV1.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default HomeHeaderV1;
