import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import SectionItem from "@/components/section-item";
import { HomeSectionV3Wrapper } from "./style";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;

  return (
    <HomeSectionV3Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <div className="room-list">
        <ScrollView>
          {infoData.list?.map((item) => {
            return (
              <SectionItem
                itemData={item}
                key={item.id}
                itemWidth="20%"
              ></SectionItem>
            );
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus"></SectionFooter>
    </HomeSectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
