import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";

import { fetchDiskData } from "@/store/modules/disk";

import HeaderSection from "@/components/header-section";
import NewDiskItemV1 from "@/components/disk-item-v1";
import { AllDiskWrapper } from "./style";

const AllDisk = memo((props) => {
  const { allDiskList, totalDisk } = props;
  const [currentPage, setCurrentPage] = useState(1);

  // ?分页展示
  const count = Math.ceil(totalDisk / 30);

  // ?处理分页点击时间
  const dispatch = useDispatch();
  function handlePageChange(e, v) {
    setCurrentPage(v);
    dispatch(fetchDiskData({ limit: 30, offset: (v - 1) * 30 }));
  }

  return (
    <AllDiskWrapper>
      <HeaderSection title="全部新碟" isShowMore={false}></HeaderSection>
      <div className="content-wrap">
        {allDiskList?.map((item, index) => {
          return (
            <NewDiskItemV1
              itemData={item}
              key={index}
              itemWidth={150}
              itemHeight={130}
              imgWidth={100}
              paddingLeft={30}
            ></NewDiskItemV1>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          count={count}
          onChange={handlePageChange}
        />
      </div>
    </AllDiskWrapper>
  );
});

AllDisk.propTypes = {
  allDiskList: PropTypes.array,
  totalDisk: PropTypes.number,
};

export default AllDisk;
