import PropTypes from "prop-types";
import React, { memo } from "react";

import { formatCount } from "@/utils/format";

import { SectionItemV1Wrapper } from "./style";

const SectionItemV1 = memo((props) => {
  const { itemData } = props;

  return (
    <SectionItemV1Wrapper>
      {itemData.map((item, index) => {
        return (
          <div className="section-item" key={item.id}>
            <div className="album">
              <img src={item.picUrl || item.coverImgUrl} alt="" />
              <div className="data">
                <div className="play-count">
                  <span className="count-icon"></span>
                  <span>{formatCount(item.playCount)}</span>
                </div>
                <span className="play-icon"></span>
              </div>
            </div>
            <div className="name omit2">{item.name}</div>
          </div>
        );
      })}
    </SectionItemV1Wrapper>
  );
});

SectionItemV1.propTypes = {
  itemData: PropTypes.array,
};

export default SectionItemV1;
