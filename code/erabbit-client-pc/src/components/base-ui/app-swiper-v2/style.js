import styled from "styled-components";

export const AppSwiperV2Wrapper = styled.div `
  position: relative;
  width: 100%;
  height: ${props=>props.swiperHeight}px;

  box-sizing: content-box;

  background-color: #f5f5f5;

  .carousel-wrap {
    position: relative;
    width: 1240px;
    height: 100%;
    margin: 0 auto;

    .control-wrap {
      position: absolute;
      z-index: ${(props) => (props.isShowBannerControl ? 100 : 0)};
      top: 0;
      right: 0;
      bottom: 0;
      left: ${(props) => (props.isHaveLeftDistance ? 100 : 0)}px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .left-arrow,
      .right-arrow {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100px;
        height: 100%;

        .control-left,
        .control-right {
          display: ${props=>props.isHiddenControl?'none':'block'};
          width:  ${props=>props.isHiddenControl?57:37}px;
          height:  ${props=>props.isHiddenControl?57:37}px;
          border-radius: ${props=>props.isHiddenControl?'':'50%'};

          cursor: pointer;
          background: url(${require("@/assets/imgs/banner-control-left.png")})
            no-repeat center 1px/contain;
          background-color: ${props=>props.isHiddenControl?'rgba(0, 0, 0, 0.3)':'#ccc'};
        }

        .control-right {
          background: url(${require("@/assets/imgs/banner-control-right.png")})
            no-repeat center 1px/contain;
          background-color: ${props=>props.isHiddenControl?'rgba(0, 0, 0, 0.3)':'#ccc'};
        }

        &:hover .control {
          display: block;
        }
      }
    }

    .ant-carousel {
      background-color:#fff;
    }
  }

  .indicator-inner {
    position: absolute;
    z-index: ${(props) => (props.isShowBannerControl ? 100 : 97)};
    left: 50%;
    bottom: 30px;

    display: flex;
    align-items: center;

    transform: translateX(-50%);

    .indicator-item {
      width: 12px;
      height: 12px;
      margin-right: 15px;
      border-radius: 50%;

      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.2);

      &:hover {
        background-color: #${props=>props.indicatorActiveColor};
      }
    }

    .indicator-item.active {
      background-color: #${props=>props.indicatorActiveColor};
    }
  }
`;