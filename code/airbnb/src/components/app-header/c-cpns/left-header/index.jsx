import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import IconLogo from "@/assets/svg/icon-logo";
import { LeftHeaderWrapper } from "./style";

const LeftHeader = memo(() => {
  const navigate=useNavigate()
  function navigateToHome(){
    navigate('/home')
  }

  return (
    <LeftHeaderWrapper>
      <div className="logo" onClick={navigateToHome}>
        <IconLogo></IconLogo>
      </div>
    </LeftHeaderWrapper>
  );
});

export default LeftHeader;
