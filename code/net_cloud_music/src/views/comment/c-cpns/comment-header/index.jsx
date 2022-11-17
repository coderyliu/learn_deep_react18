import React, { memo, useState } from "react";
import { message } from "antd";

import { CommentHeaderWrapper } from "./style";

const CommentHeader = memo((props) => {
  const { commentClick } = props;

  const [content, setContent] = useState();
  const [count, setCount] = useState(150);

  // ?处理文字数量改变
  function handleTextChange(e) {
    setContent(e.target.value);
    const count = e.target.value.length;
    setCount(150 - count);
  }

  // ?处理发表评论逻辑
  function handleSendClick() {
    if (!localStorage.getItem("token")) {
      message.info("请您先登录后再发表评论!");
    }

    commentClick(content);
    setContent("");
    setCount(150)
  }

  return (
    <CommentHeaderWrapper>
      <div className="title">
        <span className="name">评论</span>
        <span className="count">共0条评论</span>
      </div>
      <div className="comment">
        <div className="left">
          <img src={require("@/assets/img/person.jpeg")} alt="" />
        </div>
        <div className="right">
          <textarea
            id="text"
            cols="30"
            rows="10"
            disabled={count <= 0}
            value={content}
            onChange={(e) => handleTextChange(e)}
          ></textarea>
          <div className="control">
            <span className="count">{count}</span>
            <span className="send" onClick={() => handleSendClick()}>
              评论
            </span>
          </div>
        </div>
      </div>
    </CommentHeaderWrapper>
  );
});

export default CommentHeader;
