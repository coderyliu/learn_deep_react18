import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getFormatDate } from "@/utils/format";

import { SongPlayListWrapper } from "./style";
import { changeCurrentSealDataAction } from "@/store/modules/menu";

const SongPlayList = memo((props) => {
  const { playlist, title = "包含这首歌的歌单" } = props;

  // ?点击item跳转至歌单详情
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleItemClick(item) {
    switch (params.type) {
      case "song":
        navigate(`/detail/song/${item.id}`);
        localStorage.setItem("curSeal", JSON.stringify(item));
        dispatch(changeCurrentSealDataAction(item));
        break;
      case "radio":
        navigate(`/detail/radio/${item.id}`);
        break;
      case "album":
        navigate(`/detail/album/${item.id}?rid=${item.artist.id}`);
        break;
      default:
        break;
    }
  }

  return (
    <SongPlayListWrapper>
      <div className="top">{title}</div>
      <div className="play-list">
        {playlist?.slice(0, 5)?.map((item, index) => {
          return (
            <div
              className="item"
              key={item.id}
              onClick={() => handleItemClick(item)}
            >
              <div className="avatar">
                <img src={item.coverImgUrl || item.picUrl} alt="" />
              </div>
              <div className="info">
                <div className="name omit">{item.name}</div>
                {item.creator && (
                  <div className="creator omit">by {item.creator.nickname}</div>
                )}
                {item.rcmdtext && (
                  <div className="creator omit">by {item.rcmdtext}</div>
                )}
                {item.publishTime && (
                  <div className="creator omit">
                    {getFormatDate(item.publishTime)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SongPlayListWrapper>
  );
});

SongPlayList.propTypes = {
  playlist: PropTypes.array,
  title: PropTypes.string,
};

export default SongPlayList;
