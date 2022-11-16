import React, { memo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  changeCurrentTabAction,
  fetchArtistAlbum,
  fetchArtistData,
  fetchArtistDesc,
  fetchArtistMv,
} from "@/store/modules/artist";
import { tabList } from "@/assets/data/tab-list";

import { TabsWrapper } from "./style";

const Tabs = memo(() => {
  const [curIndex, setCurIndex] = useState(0);

  // ?处理tab的点击
  const params = useParams();
  const dispatch = useDispatch();
  function handleTabClick(item, index) {
    setCurIndex(index);
    dispatch(changeCurrentTabAction(item.value));
    switch (item.value) {
      case "song":
        dispatch(fetchArtistData({ id: params.id }));
        break;
      case "album":
        dispatch(fetchArtistAlbum({ id: params.id }));
        break;
      case "mv":
        dispatch(fetchArtistMv({ id: params.id }));
        break;
      case "desc":
        dispatch(fetchArtistDesc({ id: params.id }));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    setCurIndex(0);
    dispatch(changeCurrentTabAction("song"));
  }, []);

  return (
    <TabsWrapper>
      {tabList.map((item, index) => {
        return (
          <div
            className={curIndex === index ? "item active" : "item"}
            onClick={() => handleTabClick(item, index)}
            key={index}
          >
            {item.title}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

export default Tabs;
