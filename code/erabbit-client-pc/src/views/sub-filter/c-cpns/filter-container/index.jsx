import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeAttrsAction,
  changeBrandIdAction,
  changeCurrentPropertyAction,
} from "@/store/modules/category";

import { FilterContainerWrapper } from "./style";

const FilterContainer = memo((props) => {
  // const [currentProperty, setCurrentProperty] = useState({});
  // const currentProperty = useRef({});
  const [currentBrandIndex, setCurrentBrandIndex] = useState(-1);

  const { saleProperties, brands } = props;

  const { currentProperty } = useSelector((state) => ({
    currentProperty: state.cate.currentProperty,
  }));
  const dispatch = useDispatch();

  // ?处理二级分类中全部的点击
  function handleTotalSignClick(type, fatherData) {
    if (type === "brand") {
      setCurrentBrandIndex(-1);
    } else {
      dispatch(
        changeCurrentPropertyAction({ fatherData, sonData: { id: "" } })
      )
    }
  }

  // ?处理二级分类中商品规格item的点击
  function handleSubItemClick(type, index, fatherData, sonData) {
    if (type === "brand") {
      setCurrentBrandIndex(index);
      dispatch(changeBrandIdAction(brands[index]));
    } else {
      // todo 方案一 这种方案只能添加样式不能去除样式 e.target可以拿到element
      // console.log(e)
      // e.target.classList.add('active')

      // todo 方案二 setState()是异步的，底层批处理setState 页面不会马上更新
      // const propertyObj = currentProperty;
      // propertyObj[fatherData["name"]] = sonData.id;
      // setCurrentProperty(propertyObj);

      // todo 方案三 当更新 current 值时并不会 re-render ，这是与 useState 不同的地方
      // currentProperty.current[fatherData["name"]] = sonData.id;
      // console.log(currentProperty.current);

      // todo 方案四 可行的原因在于dispatch是同步的，redux中的值变化之后更新页面
      dispatch(changeCurrentPropertyAction({ fatherData, sonData }));
      dispatch(changeAttrsAction({ fatherData, sonData }));
    }
  }

  return (
    <FilterContainerWrapper>
      <div className="sub-wrapper">
        <h3 className="sub-name">品牌：</h3>
        <ul className="sub-wrap">
          <li
            className={
              currentBrandIndex === -1 ? "sub-item active" : "sub-item"
            }
            onClick={() => handleTotalSignClick("brand")}
          >
            全部
          </li>
          {brands?.map((item, index) => {
            return (
              <li
                key={item.id}
                className={
                  currentBrandIndex === index ? "sub-item active" : "sub-item"
                }
                onClick={() => handleSubItemClick("brand", index)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      {saleProperties?.map((item) => {
        return (
          <div className="sub-wrapper" key={item.id}>
            <h3 className="sub-name">{item.name}：</h3>
            <ul className="sub-wrap">
              <li
                className={
                  currentProperty[item.name] === "" ||
                  !currentProperty[item.name]
                    ? "sub-item active"
                    : "sub-item"
                }
                onClick={() => handleTotalSignClick("properties", item)}
              >
                全部
              </li>
              {item?.properties?.map((iten, index) => {
                return (
                  <li
                    key={iten.id}
                    className={
                      iten.id === currentProperty[item.name]
                        ? "sub-item omit active"
                        : "sub-item omit"
                    }
                    onClick={() =>
                      handleSubItemClick("properties", index, item, iten)
                    }
                  >
                    {iten.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </FilterContainerWrapper>
  );
});

FilterContainer.propTypes = {
  saleProperties: PropTypes.array,
  brands: PropTypes.array,
};

export default FilterContainer;
