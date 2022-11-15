import PropTypes from "prop-types";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeCurrentSealDataAction } from "@/store/modules/menu";
import { formatCount } from "@/utils/format";

import { SectionItemV1Wrapper } from "./style";

const SectionItemV1 = memo((props) => {
  const { itemData } = props;

  // ?处理item点击至详情页
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleItemClick(item) {
    navigate(`/detail/song/${item.id}`);
    localStorage.setItem("curSeal", JSON.stringify(item));
    dispatch(changeCurrentSealDataAction(item));
  }

  return (
    <SectionItemV1Wrapper>
      {itemData.map((item, index) => {
        return (
          <div
            className="section-item"
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            <div className="album">
              <img src={item.picUrl || item.coverImgUrl} alt="" />
              <div className="data">
                <div className="play-count">
                  <span className="count-icon"></span>
                  <span>{formatCount(item.playCount)}</span>
                </div>
                <span className="play-icon"></span>
              </div>
            </div>
            <div className="name omit2">{item.name}</div>
          </div>
        );
      })}
    </SectionItemV1Wrapper>
  );
});

SectionItemV1.propTypes = {
  itemData: PropTypes.array,
};

export default SectionItemV1;
