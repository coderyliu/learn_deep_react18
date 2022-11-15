import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  changeCurrentCateAction,
  changeIsShowModalAction,
  fetchSongMenuData,
} from "@/store/modules/songMenu";
import { handleCategoryData } from "@/utils/handle-data";

import { CategorySectionWrapper } from "./style";

const CategorySection = memo((props) => {
  const { categoryList } = props;
  const cateList = handleCategoryData(
    categoryList.categories,
    categoryList.sub
  );

  // ?处理每个分类项的点击
  const dispatch = useDispatch();
  function handleItenClick(data) {
    dispatch(changeCurrentCateAction(data.name));
    dispatch(fetchSongMenuData({ cat: data.name, isGetCate: false }));
  }

  // ?处理select失去焦点
  function handleSelectBlur() {
    dispatch(changeIsShowModalAction(false));
  }

  return (
    <CategorySectionWrapper>
      <div className="outer" onMouseLeave={handleSelectBlur}>
        <div className="top">
          <span className="all">全部风格</span>
        </div>
        <div className="list-wrap">
          {cateList?.map((item, index) => {
            return (
              <div className="item-wrap" key={item.title}>
                <div className="left">
                  <span className={`icon${index} icon`}></span>
                  <span className="title">{item.title}</span>
                </div>
                <div className="right">
                  {item.list?.map((iten, indey) => {
                    return (
                      <div
                        className="iten"
                        key={iten.name}
                        onClick={() => handleItenClick(iten)}
                      >
                        {iten.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CategorySectionWrapper>
  );
});

CategorySection.propTypes = {
  categoryList: PropTypes.object,
};

export default CategorySection;
