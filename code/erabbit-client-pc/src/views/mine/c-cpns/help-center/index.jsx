import PropTypes from "prop-types";
import React, { memo } from "react";

import { HelpCenterWrapper } from "./style";

const HelpCenter = memo((props) => {
  return (
    <HelpCenterWrapper>
      <h2>HelpCenter center</h2>
    </HelpCenterWrapper>
  );
});

HelpCenter.propTypes = {};

export default HelpCenter;
