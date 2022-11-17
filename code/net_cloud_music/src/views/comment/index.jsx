import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

import CommentHot from "./c-cpns/comment-hot";
import CommentList from "./c-cpns/comment-list";
import { CommentWrapper } from "./style";
import CommentHeader from "./c-cpns/comment-header";

const Comment = memo((props) => {
  const { paginationClick, commentClick } = props;

  // ?redux相关
  const { hotComment, currentTypeComment, totalComment } = useSelector(
    (state) => ({
      hotComment: state.comment.hotComment,
      currentTypeComment: state.comment.currentTypeComment,
      totalComment: state.comment.totalComment,
    }),
    shallowEqual
  );

  // ?处理分页逻辑
  function handlePageChange(e, v) {
    paginationClick(v);
  }

  return (
    <CommentWrapper>
      <CommentHeader commentClick={commentClick}></CommentHeader>
      {hotComment && <CommentHot commentList={hotComment}></CommentHot>}
      <CommentList commentList={currentTypeComment}></CommentList>
      {totalComment > 20 && (
        <div className="pagination">
          <Pagination
            count={Math.ceil(totalComment / 20)}
            onChange={handlePageChange}
          />
        </div>
      )}
    </CommentWrapper>
  );
});

export default Comment;
