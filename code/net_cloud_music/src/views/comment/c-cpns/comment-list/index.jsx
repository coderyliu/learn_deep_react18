import PropTypes from "prop-types";
import React, { memo } from "react";
import CommentWrap from "../comment-wrap";

import { CommentListWrapper } from "./style";

const CommentList = memo((props) => {
  const { commentList } = props;

  return (
    <CommentListWrapper>
      <h3 className="top">最新评论</h3>
      <div className="list-wrap">
        {commentList?.map((item, index) => {
          return (
            <CommentWrap commentData={item} key={item.commentId}></CommentWrap>
          );
        })}
      </div>
    </CommentListWrapper>
  );
});

CommentList.propTypes = {
  commentList: PropTypes.array,
};

export default CommentList;
