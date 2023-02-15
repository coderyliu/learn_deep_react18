import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";

import { filterList } from "@/common";
import {
  changeCurrentPageAction,
  changeInventoryAction,
  changeOnlyDistanceAction,
  changeSortFieldAction,
} from "@/store/modules/category";

import CateListItemV1 from "@/components/common/cate-list-item-v1";
import { FilterGoodsContainerWrapper } from "./style";

const FilterGoodsContainer = memo(() => {
  // ?redux相关
  const {
    subGoodsList,
    total,
    currentPage,
    inventory,
    onlyDiscount,
    sortField,
  } = useSelector(
    (state) => ({
      subGoodsList: state.cate.subGoodsList,
      total: state.cate.total,
      currentPage: state.cate.currentPage,
      inventory: state.cate.inventory,
      onlyDiscount: state.cate.onlyDiscount,
      sortField: state.cate.sortField,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // ?处理分页器变化
  function handlePageChange(p) {
    dispatch(changeCurrentPageAction(p));
  }

  // ?处理排序框变化
  function handleSortClick(data) {
    dispatch(changeSortFieldAction(data.sortField));
  }

  // ?处理筛选框变化
  function handleCheckedChange(e, type) {
    if (type === "inventory") {
      dispatch(changeInventoryAction(e.target.checked));
    } else {
      dispatch(changeOnlyDistanceAction(e.target.checked));
    }
  }

  return (
    <FilterGoodsContainerWrapper>
      <div className="top-filter-wrap">
        <ul className="left-filter">
          {filterList.map((item) => {
            return (
              <li
                key={item.title}
                className={
                  item.sortField === sortField
                    ? "left-filter-item active"
                    : "left-filter-item"
                }
                onClick={() => handleSortClick(item)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <ul className="right-filter">
          <li className="right-filter-item">
            <label htmlFor="inventory">
              <input
                type="checkbox"
                id="inventory"
                value={inventory}
                onChange={(e) => handleCheckedChange(e, "inventory")}
              />
              仅显示有货商品
            </label>
          </li>
          <li className="right-filter-item">
            <label htmlFor="onlyDiscount">
              <input
                type="checkbox"
                id="onlyDiscount"
                value={onlyDiscount}
                onChange={(e) => handleCheckedChange(e, "onlyDiscount")}
              />
              仅显示特惠商品
            </label>
          </li>
        </ul>
      </div>
      <ul className="goods-list-wrap">
        {subGoodsList?.map((item) => {
          return (
            <CateListItemV1
              dataInfo={item}
              key={item.id}
              marginLeft={15}
            ></CateListItemV1>
          );
        })}
      </ul>
      <div className="pagination">
        <Pagination
          total={total}
          showTotal={(total) => `共 ${total} 项`}
          defaultCurrent={currentPage}
          defaultPageSize={15}
          onChange={handlePageChange}
        />
      </div>
    </FilterGoodsContainerWrapper>
  );
});

export default FilterGoodsContainer;
