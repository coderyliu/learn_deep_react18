import React, { memo } from "react";

import { footerNavList, footerBasicList } from "@/assets/data/footer-list";

import { AppFooterWrapper } from "./style";

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="footer-inner">
        <ul className="top_icon">
          {footerNavList.map((item, index) => {
            return (
              <li key={index} className="item">
                <a href={item.link} target="_blank" className={item.icon}>
                  <span className="text omit">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="bottom-info">
          <ul className="suggest">
            {footerBasicList.map((item, index) => {
              return (
                <li key={index} className="item">
                  <a href={item.link} target="_blank">
                    <span className="text">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <span className="info-website">互联网宗教信息服务许可证：浙（2022）0000120 粤B2-20090191-18  工业和信息化部备案管理系统网站</span>
          <span className="info-website">网易公司版权所有©1997-2022</span>
        </div>
      </div>
    </AppFooterWrapper>
  );
});

export default AppFooter;
