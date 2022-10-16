import PropTypes from "prop-types";
import React, { memo } from "react";
import Rating from "@mui/material/Rating";

import { SectionItemWrapper } from "./style";

const SectionItem = memo((props) => {
  const { itemData } = props;

  return (
    <SectionItemWrapper
      verifyColor={itemData.verify_info?.text_color || "#39576a"}
    >
      <div className="section-item">
        <div className="cover">
          <img src={itemData.picture_url} alt="" className="picture" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating 
            name="read-only" 
            value={itemData.star_rating ?? 5} 
            precision={0.1}
            readOnly 
            sx={{color:'#00848A',fontSize:'12px',marginRight:'-1px'}}
          />
          <span className="count">{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className="extra">·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </SectionItemWrapper>
  );
});

SectionItem.propTypes = {
  itemData: PropTypes.object,
};

export default SectionItem;
