import PropTypes from "prop-types";
import React, { memo } from "react";

import { ListenerSectionWrapper } from "./style";

const ListenerSection = memo((props) => {
  const { title = "喜欢这个歌单的人", userList } = props;

  return (
    <ListenerSectionWrapper>
      <div className="top">{title}</div>
      <ul className="list">
        {userList?.slice(0, 10)?.map((item) => {
          return (
            <li className="item" key={item.userId}>
              <img src={item.avatarUrl} alt="" />
            </li>
          );
        })}
      </ul>
    </ListenerSectionWrapper>
  );
});

ListenerSection.propTypes = {
  userList: PropTypes.array,
  title: PropTypes.string,
};

export default ListenerSection;
