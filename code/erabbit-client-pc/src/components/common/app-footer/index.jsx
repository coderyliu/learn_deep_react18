import React, { memo } from "react";
import {
  MessageOutlined,
  QuestionCircleOutlined,
  WechatOutlined,
  WeiboCircleOutlined,
  SmileOutlined,
  LikeOutlined,
  InsuranceOutlined,
  CopyrightOutlined
} from "@ant-design/icons";

import { AppFooterWrapper } from "./style";

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="footer-top">
        <div className="top-wrap">
          <div className="top-item">
            <p className="desc-font">客户服务</p>
            <div className="desc-info">
              <div className="online-service block">
                <MessageOutlined />
                <p className="desc-title">在线客服</p>
              </div>
              <div className="question block">
                <QuestionCircleOutlined />
                <p className="desc-title">问题反馈</p>
              </div>
            </div>
          </div>
          <div className="top-item">
            <p className="desc-font">关注我们</p>
            <div className="desc-info">
              <div className="wechat-service block">
                <WechatOutlined />
                <p className="desc-title">公众号</p>
              </div>
              <div className="weibo block">
                <WeiboCircleOutlined />
                <p className="desc-title">微博</p>
              </div>
            </div>
          </div>
          <div className="top-item">
            <p className="desc-font">下载APP</p>
            <div className="desc-info">
              <div className="download-code block">
                <img src={require("@/assets/imgs/qrcode.jpg")} alt="" />
              </div>
              <div className="download-desc">
                <p className="download">扫描二维码</p>
                <p className="download">立即下载APP</p>
                <span className="download-btn">下载页面</span>
              </div>
            </div>
          </div>
          <div className="top-item">
            <p className="desc-font">服务热线</p>
            <div className="service-info">
              <p className="phone">400-0000-000</p>
              <p className="time">周一至周日 8:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-wrap">
          <ul className="top">
            <li className="bottom-item">
              <SmileOutlined />
              <span className="bottom-item-title">价格亲民</span>
            </li>
            <li className="bottom-item">
              <LikeOutlined />
              <span className="bottom-item-title">物流便捷</span>
            </li>
            <li className="bottom-item">
              <InsuranceOutlined />
              <span className="bottom-item-title">品质新鲜</span>
            </li>
          </ul>
          <div className="bottom">
            <ul className="bottom-explain-list">
              <li className="explain-item">关于我们</li>
              <li className="explain-item">帮助中心</li>
              <li className="explain-item">售后服务</li>
              <li className="explain-item">配送与验收</li>
              <li className="explain-item">商务合作</li>
              <li className="explain-item">搜索推荐</li>
              <li className="explain-item">友情链接</li>
            </ul>
            <p className="copy-right">
              CopyRight <CopyrightOutlined /> 小兔鲜
            </p>
          </div>
        </div>
      </div>
    </AppFooterWrapper>
  );
});

export default AppFooter;
