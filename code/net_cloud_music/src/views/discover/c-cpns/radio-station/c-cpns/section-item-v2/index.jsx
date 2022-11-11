import PropTypes from "prop-types";
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";

import RadioHeader from "../radio-header";
import RadioItemV2 from "@/components/radio-item-v2";

import { SectionItemV2Wrapper } from "./style";
import { fetchRadioData } from "@/store/modules/radio";

const SectionItemV2 = memo((props) => {
  const { listData, count } = props;

  // redux状态
  const { categoryId } = useSelector(
    (state) => ({
      categoryId: state.radio.categoryId,
    }),
    shallowEqual
  );

  // ? 分页逻辑
  const dispatch = useDispatch();
  const pageCount = Math.ceil(count / 22);
  function handlePageChange(e, v) {
    dispatch(
      fetchRadioData({
        id: categoryId,
        isGetCate: false,
        offset: (v - 1) * 22,
        isGetExcellent: false,
      })
    );
  }

  return (
    <SectionItemV2Wrapper>
      <RadioHeader title="电台排行榜" isShowToggle={true}></RadioHeader>
      <div className="excellent-wrap">
        {listData?.map((item, index) => {
          return <RadioItemV2 itemData={item} key={item.id}></RadioItemV2>;
        })}
      </div>
      <div className="pagination">
        <Pagination count={pageCount} onChange={handlePageChange} />
      </div>
    </SectionItemV2Wrapper>
  );
});

SectionItemV2.propTypes = {
  listData: PropTypes.array,
  count: PropTypes.number,
};

export default SectionItemV2;
