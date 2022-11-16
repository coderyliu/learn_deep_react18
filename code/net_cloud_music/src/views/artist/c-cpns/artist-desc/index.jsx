import PropTypes from "prop-types";
import React, { memo } from "react";

import { ArtistDescWrapper } from "./style";

const ArtistDesc = memo((props) => {
  const { detailInfo } = props;

  return (
    <ArtistDescWrapper>
      <div className="desc-wrap">
        {/* <div className="name">{detailInfo.briefDesc.slice)}</div> */}
        {detailInfo.briefDesc && (
          <p className="brief">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{detailInfo.briefDesc}</p>
        )}
        {detailInfo.introduction && (
          <div className="introduction">
            {detailInfo?.introduction?.map((item) => {
              return (
                <div className="item" key={item.ti}>
                  <div className="title">{item.ti}</div>
                  <p className="content">{item.txt}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </ArtistDescWrapper>
  );
});

ArtistDesc.propTypes = {
  detailInfo: PropTypes.object,
};

export default ArtistDesc;
