import React, { memo } from "react";
import { useDispatch } from "react-redux";

import singerCategory from "@/assets/data/singer-category.json";
import { changeParamsAction, fetchSingerData } from "@/store/modules/singer";

import { SingerCategoryWrapper } from "./style";

const SingerCategory = memo((props) => {
  const { currentTitle } = props;
  // redux
  const dispatch = useDispatch();

  // ?处理歌手分类点击
  function handleCateClick(area, type, title) {
    dispatch(changeParamsAction({ area, type, title }));
    dispatch(fetchSingerData({ area, type, title }));
  }

  return (
    <SingerCategoryWrapper>
      <div className="inner-cont">
        <div className="item">
          <div className="title">推荐</div>
          <ul className="category">
            <li
              className={
                currentTitle.includes("推荐") ? "section active" : "section"
              }
              onClick={() => handleCateClick(-1, 1, "推荐歌手")}
            >
              推荐歌手
            </li>
            <li
              className={
                currentTitle.includes("入驻") ? "section active" : "section"
              }
              onClick={() => handleCateClick(-1, 1, "入驻歌手")}
            >
              入驻歌手
            </li>
          </ul>
        </div>
        {singerCategory.map((item, index) => {
          return (
            <div className="item" key={item.value}>
              <div className="title">{item.title}</div>
              <ul className="category">
                <li
                  className={
                    currentTitle.includes(`${item.title}男`)
                      ? "section active"
                      : "section"
                  }
                  onClick={() =>
                    handleCateClick(item.value, 1, item.title + "男歌手")
                  }
                >
                  {item.title}男歌手
                </li>
                <li
                  className={
                    currentTitle.includes(`${item.title}女`)
                      ? "section active"
                      : "section"
                  }
                  onClick={() =>
                    handleCateClick(item.value, 2, item.title + "女歌手")
                  }
                >
                  {item.title}女歌手
                </li>
                <li
                  className={
                    currentTitle.includes(`${item.title}组合`)
                      ? "section active"
                      : "section"
                  }
                  onClick={() =>
                    handleCateClick(item.value, 3, item.title + "组合/乐队")
                  }
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
