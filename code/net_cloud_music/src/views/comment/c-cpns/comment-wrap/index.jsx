import PropTypes from "prop-types";
import React, { memo } from "react";

import { getFormatDate2 } from "@/utils/format";

import { CommentWrapWrapper } from "./style";

const CommentWrap = memo((props) => {
  const { commentData } = props;

  // ?处理喜欢按钮的点击
  function handleLikeClick(){
    console.log(1)
  }

  return (
    <CommentWrapWrapper>
      <div className="left">
        <img src={commentData?.user?.avatarUrl} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <span className="name">{commentData?.user?.nickname}</span>
          <span className="text"> : </span>
          {commentData.content}
        </div>
        <div className="bottom">
          <div className="time">{getFormatDate2(commentData.time)}</div>
          <div className="btn">
            <span className="icon" onClick={()=>handleLikeClick()}></span>
            <span className="count">{commentData.likeCount}</span>
            <span className="gap"> | </span>
            <span className="replay">回复</span>
          </div>
        </div>
      </div>
    </CommentWrapWrapper>
  );
});

CommentWrap.propTypes = {
  commentData: PropTypes.object,
};

export default CommentWrap;
