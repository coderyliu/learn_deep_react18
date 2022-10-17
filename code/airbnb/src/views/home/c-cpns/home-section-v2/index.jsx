import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";
import { HomeSectionV2Wrapper } from "./style";

const HomeSectionV2 = memo((props) => {
  // props
  const { infoData } = props;

  // state Hook维护的数据
  const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? "";
  const [name, setName] = useState(initialName);
  const tabLists = infoData.dest_address?.map((item) => item.name);

  // 副作用
  const tabClick = useCallback((index, name) => {
    setName(name);
  }, []);

  return (
    <HomeSectionV2Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <SectionTabs tabLists={tabLists} tabClick={tabClick}></SectionTabs>
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth="33.333%"
      ></SectionRooms>
      <SectionFooter name={name}></SectionFooter>
    </HomeSectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
