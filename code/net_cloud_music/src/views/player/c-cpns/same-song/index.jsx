import PropTypes from "prop-types";
import React, { memo } from "react";

import { SameSongWrapper } from "./style";

const SameSong = memo((props) => {
  const { sameSong } = props;

  return (
    <SameSongWrapper>
      <div className="top">相似歌曲</div>
      <div className="same-song-list">
        {sameSong?.map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <div className="info">
                <div className="name omit">{item.name}</div>
                <div className="avatar">{item.artists[0].name}</div>
              </div>
              <div className="operation">
                <span className="btn player-icon"></span>
                <span className="btn add-icon"></span>
              </div>
            </div>
          );
        })}
      </div>
    </SameSongWrapper>
  );
});

SameSong.propTypes = {
  sameSong: PropTypes.array,
};

export default SameSong;
