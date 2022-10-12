import React, { memo } from "react";

import IconLogo from "@/assets/svg/icon-logo";
import { LeftHeaderWrapper } from "./style";

const LeftHeader = memo(() => {
  return (
    <LeftHeaderWrapper>
      <div className="logo">
        <IconLogo></IconLogo>
      </div>
    </LeftHeaderWrapper>
  );
});

export default LeftHeader;
