import MvItemV1 from "@/components/mv-item-v1";
import PropTypes from "prop-types";
import React, { memo } from "react";

import { ArtistMvWrapper } from "./style";

const ArtistMv = memo((props) => {
  const { listData } = props;

  return (
    <ArtistMvWrapper>
      <div className="mv-list">
        {listData?.map((item, index) => {
          return <MvItemV1 itemData={item} key={item.id}></MvItemV1>;
        })}
      </div>
    </ArtistMvWrapper>
  );
});

ArtistMv.propTypes = {
  listData: PropTypes.array,
};

export default ArtistMv;
