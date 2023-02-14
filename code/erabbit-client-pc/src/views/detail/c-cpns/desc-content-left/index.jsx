import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import { DescContentLeftWrapper } from "./style";
import GoodsProperty from "./c-cpns/goods-property";
import CommentContent from "./c-cpns/comment-content";

const DescContentLeft = memo((props) => {
  const [currentTag, setCurrentTag] = useState("detail");

  const { detailInfo } = props;

  // ?切换tag标签
  function handleToggleTag(tag) {
    setCurrentTag(tag);
  }

  return (
    <DescContentLeftWrapper>
      <div className="toggle-header">
        <p
          className={
            currentTag === "detail" ? "detail-info active" : "detail-info"
          }
          onClick={() => handleToggleTag("detail")}
        >
          商品详情
        </p>
        <p
          className={currentTag === "comment" ? "comment active" : "comment"}
          onClick={() => handleToggleTag("comment")}
        >
          商品评论
        </p>
      </div>
      {currentTag === "detail" ? (
        <GoodsProperty detailInfo={detailInfo}></GoodsProperty>
      ) : (
        <CommentContent></CommentContent>
      )}
    </DescContentLeftWrapper>
  );
});

DescContentLeft.propTypes = {
  detailInfo: PropTypes.object,
};

export default DescContentLeft;
