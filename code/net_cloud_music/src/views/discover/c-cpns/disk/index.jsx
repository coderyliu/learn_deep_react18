import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchDiskData } from "@/store/modules/disk";

import HotDisk from "./c-cpns/hot-disk";
import AllDisk from "./c-cpns/all-disk";
import { DiskWrapper } from "./style";

const Disk = memo((props) => {
  // redux相关
  const { hotDiskList, allDiskList, totalDisk } = useSelector(
    (state) => ({
      hotDiskList: state.disk.hotDiskList,
      allDiskList: state.disk.allDiskList,
      totalDisk: state.disk.totalDisk,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // 发起网络请求
  useEffect(() => {
    dispatch(fetchDiskData({ limit: 30, offset: 0 }));
  }, [dispatch]);

  return (
    <DiskWrapper>
      <div className="disk-wrapper">
        <HotDisk hotDiskList={hotDiskList}></HotDisk>
        <AllDisk allDiskList={allDiskList} totalDisk={totalDisk}></AllDisk>
      </div>
    </DiskWrapper>
  );
});

export default Disk;
