import React, { memo } from "react";
import { useDispatch } from "react-redux";

import singerCategory from "@/assets/data/singer-category.json";
import { fetchSingerData } from "@/store/modules/singer";

import { SingerCategoryWrapper } from "./style";

const SingerCategory = memo((props) => {
  // redux
  const dispatch = useDispatch();

  // ?处理歌手分类点击
  function handleCateClick(area, type) {
    dispatch(fetchSingerData({ area, type }));
  }

  return (
    <SingerCategoryWrapper>
      <div className="inner-cont">
        <div className="item">
          <div className="title">推荐</div>
          <ul className="category">
            <li className="section" onClick={()=>handleCateClick(-1,-1)}>推荐歌手</li>
            <li className="section" onClick={()=>handleCateClick(-1)}>入驻歌手</li>
          </ul>
        </div>
        {singerCategory.map((item, index) => {
          return (
            <div className="item" key={item.value}>
              <div className="title">{item.title}</div>
              <ul className="category">
                <li
                  className="section"
                  onClick={() => handleCateClick(item.value, 1)}
                >
                  {item.title}男歌手
                </li>
                <li
                  className="section"
                  onClick={() => handleCateClick(item.value, 2)}
                >
                  {item.title}女歌手
                </li>
                <li
                  className="section"
                  onClick={() => handleCateClick(item.value, 3)}
                >
                  {item.title}组合/乐队
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </SingerCategoryWrapper>
  );
});

export default SingerCategory;
