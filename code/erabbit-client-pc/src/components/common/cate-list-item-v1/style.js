import styled from "styled-components";

export const CateListItemV1Wrapper = styled.li `
  position: relative;
  z-index:101;
  width: ${props=>props.wrapWidth}px;
  height: ${props=>props.wrapHeight}px;

  padding: 20px 30px;
  margin-bottom:10px;
  margin-left:${props=>props.marginLeft}px;

  box-sizing: content-box;
  transition: all 0.4s ease;
  background-color:#${props=>props.bgColor} ;

  &:hover {
    box-shadow: ${props=>props.isTriggerHover?'5px 10px 10px rgba(0, 0, 0, 0.1)':''};
    transform: ${props=>props.isTriggerHover?'translateY(-6px)':''};
  }

  > .item-wrap {
    > .top-cover {
      width: 100%;
      height: ${props=>props.imgHeight}px;

      img {
        display: block;
        width: ${props=>props.imgWidth}px;
        height: ${props=>props.imgHeight}px;
        margin:0 auto;

        object-fit: cover;
        cursor: pointer;
      }
    }

    > .bottom-info {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: ${props=>props.wrapWidth}px;

      text-align: center;

      .name {
        width:${props=>props.imgWidth}px;
        margin-top: 6px;

        font-size: 16px;
        color: #${props=>props.nameColor};

        cursor: pointer;
      }

      .desc {
        width: ${props=>props.imgWidth}px;
        margin-top: 6px;

        font-size: 14px;
        color: #999;

        cursor: pointer;
      }

      .price {
        margin-top: 6px;

        font-size: 18px;
        color: #cf4444;

        cursor: pointer;
      }
    }
  }
`;