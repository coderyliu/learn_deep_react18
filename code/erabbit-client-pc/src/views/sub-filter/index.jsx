import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchFilterCategoryData,
  fetchSubGoodsList,
} from "@/store/modules/category";

import FilterContainer from "./c-cpns/filter-container";
import FilterGoodsContainer from "./c-cpns/filter-goods-container";
import { SubFilterWrapper } from "./style";

const SubFilter = memo(() => {
  const params = useParams();

  // redux相关
  const {
    secondCateInfo,
    isFixedHeader,
    page,
    pageSize,
    brandId,
    attrs,
    inventory,
    onlyDiscount,
    sortField,
  } = useSelector(
    (state) => ({
      secondCateInfo: state.cate.secondCateInfo,
      isFixedHeader: state.main.isFixedHeader,
      page: state.cate.currentPage,
      pageSize: state.cate.currentSize,
      brandId: state.cate.brandId,
      attrs: state.cate.attrs,
      inventory: state.cate.inventory,
      onlyDiscount: state.cate.onlyDiscount,
      sortField: state.cate.sortField,
    }),
    shallowEqual
  );

  // ?请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilterCategoryData({ id: params.id }));
  }, [dispatch, params.id]);

  // todo 统一处理发送筛选请求
  // todo 这里需要注意，虽然dispatch是同步的，更改了state中的数据，但是在组件未更新之前是拿不到最新变化的数据的
  useEffect(() => {
    dispatch(
      fetchSubGoodsList({
        categoryId: params.id,
        page,
        pageSize,
        brandId,
        attrs,
        inventory,
        onlyDiscount,
        sortField,
      })
    );
  }, [
    params.id,
    page,
    pageSize,
    brandId,
    attrs,
    inventory,
    onlyDiscount,
    sortField,
  ]);

  return (
    <SubFilterWrapper isHavePadding={isFixedHeader}>
      <div className="sub-container">
        <FilterContainer
          saleProperties={secondCateInfo?.saleProperties}
          brands={secondCateInfo?.brands}
        ></FilterContainer>
        <FilterGoodsContainer></FilterGoodsContainer>
      </div>
    </SubFilterWrapper>
  );
});

export default SubFilter;
