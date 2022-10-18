import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import { HomeLongForWrapper } from "./style";
import LongForItem from "@/components/longfor-item";

const HomeLongFor = memo((props) => {
  const { infoData } = props;

  return (
    <HomeLongForWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <ScrollView>
        {infoData.list?.map((item) => {
          return <LongForItem itemData={item} key={item.city}></LongForItem>;
        })}
      </ScrollView>
    </HomeLongForWrapper>
  );
});

HomeLongFor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongFor;
