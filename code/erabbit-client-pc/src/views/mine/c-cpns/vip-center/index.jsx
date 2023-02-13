import PropTypes from "prop-types";
import React, { memo } from "react";

import { VipCenterWrapper } from "./style";

const VipCenter = memo((props) => {
  return (
    <VipCenterWrapper>
      <h2>VipCenter center</h2>
    </VipCenterWrapper>
  );
});

VipCenter.propTypes = {};

export default VipCenter;
