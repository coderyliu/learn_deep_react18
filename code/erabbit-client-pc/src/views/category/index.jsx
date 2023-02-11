import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import { CategoryWrapper } from "./style";

const Category = memo(() => {
  // ?路由
  const params = useParams();
  console.log(params)

  // ?redux状态
  const { isFixedHeader } = useSelector(
    (state) => ({
      isFixedHeader: state.main.isFixedHeader,
    }),
    shallowEqual
  );

  return (
    <CategoryWrapper isHavePadding={isFixedHeader}>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
      <h2>分类页</h2>
    </CategoryWrapper>
  );
});

export default Category;
