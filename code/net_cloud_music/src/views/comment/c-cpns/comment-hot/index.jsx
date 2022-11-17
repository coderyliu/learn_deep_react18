import PropTypes from "prop-types";
import React, { memo } from "react";

import CommentWrap from "../comment-wrap";
import { CommentHotWrapper } from "./style";

const CommentHot = memo((props) => {
  const { commentList } = props;

  return (
    <CommentHotWrapper>
      <h3 className="top">精彩评论</h3>
      <div className="list-wrap">
        {commentList?.map((item, index) => {
          return (
            <CommentWrap commentData={item} key={item.commentId}></CommentWrap>
          );
        })}
      </div>
    </CommentHotWrapper>
  );
});

CommentHot.propTypes = {
  commentList: PropTypes.array,
};

export default CommentHot;
