import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionItemV1 from "@/components/section-item-v1";
import { AllSongMenuWrapper } from "./style";

const AllSongMenu = memo((props) => {
  const { categoryData } = props;

  return (
    <AllSongMenuWrapper>
      <SectionItemV1 itemData={categoryData}></SectionItemV1>
    </AllSongMenuWrapper>
  );
});

AllSongMenu.propTypes = {
  categoryData: PropTypes.array,
};

export default AllSongMenu;
