import { changeCategoryIdAction, fetchRadioData } from "@/store/modules/radio";
import PropTypes from "prop-types";
import React, { memo, useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { CategoryItemImage, CategorySliderWrapper } from "./style";

const CategorySlider = memo((props) => {
  const { categories } = props;
  // 组件状态相关
  const [currentSlider, setCurrentSlider] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const sliderRef = useRef();
  const containerRef = useRef();

  // ?分页逻辑处理
  const pageNum = Math.ceil(categories.length / 18);
  const pageArr = [];
  for (let i = 0; i < pageNum; i++) {
    pageArr.push(i);
  }

  // ?处理分类项item点击
  const dispatch = useDispatch();
  function handleCateClick(data, index) {
    setCurrentSlider(index);
    dispatch(changeCategoryIdAction(data.id));
    dispatch(
      fetchRadioData({ id: data.id, isGetCate: false, isGetExcellent: true })
    );
  }

  // ?处理slider的点击
  function handleBtnToggle(isRight = true) {
    let index;
    if (isRight) {
      index = currentPage < pageNum - 1 ? currentPage + 1 : currentPage;
    } else {
      index = currentPage < 1 ? 0 : currentPage - 1;
    }

    setCurrentPage(index);
    sliderRef.current.style.left = `-${index * 900}px`;
  }

  // ?处理副作用
  useEffect(() => {
    sliderRef.current.style.width = pageNum * 900 + "px";
  }, [pageNum]);

  return (
    <CategorySliderWrapper page={currentPage}>
      <div className="control">
        <div className="btn left" onClick={() => handleBtnToggle(false)}></div>
        <div className="btn right" onClick={() => handleBtnToggle(true)}></div>
      </div>
      <div className="slider-wrap" ref={containerRef}>
        <div className="inner-wrap" ref={sliderRef}>
          {pageArr.map((page, sort) => {
            return (
              <ul className="inner" key={sort}>
                {categories
                  ?.slice(page * 18, (page + 1) * 18)
                  ?.map((item, index) => {
                    return (
                      <li
                        className={
                          currentSlider === index && currentPage === page
                            ? "item active"
                            : "item"
                        }
                        key={item.id}
                        onClick={() => handleCateClick(item, index)}
                      >
                        <CategoryItemImage
                          className="image"
                          imageUrl={item.picWebUrl}
                        ></CategoryItemImage>
                        <span className="name">{item.name}</span>
                      </li>
                    );
                  })}
              </ul>
            );
          })}
        </div>
        {/* <li className="item">
            <span className="icon"></span>
            <span className="name">常见问题</span>
          </li>
          <li className="item">
            <span className="icon"></span>
            <span className="name">我要做主播</span>
          </li> */}
      </div>
      <ul className="indicator">
        {pageArr.map((item, index) => {
          return (
            <li
              key={index}
              className={currentPage === index ? "item active" : "item"}
            ></li>
          );
        })}
      </ul>
    </CategorySliderWrapper>
  );
});

CategorySlider.propTypes = {
  categories: PropTypes.array,
};

export default CategorySlider;
