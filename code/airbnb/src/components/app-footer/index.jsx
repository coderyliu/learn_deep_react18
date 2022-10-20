import React, { memo } from "react";

import footerData from "@/assets/data/footer-data.json";
import { FooterWrapper } from "./style";

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content-wrap">
        <div className="top">
          {footerData.map((item) => {
            return (
              <div className="item-wrap" key={item.name}>
                <div className="title">{item.name}</div>
                <div className="item">
                  {item.list.map((value) => {
                    return (
                      <div key={value} className="iten">
                        {value}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottom">
          <div className="statement">
            © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
            全国旅游投诉渠道 12301
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;
