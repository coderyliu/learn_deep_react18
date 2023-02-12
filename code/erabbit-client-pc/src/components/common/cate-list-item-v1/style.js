import styled from "styled-components";

export const CateListItemV1Wrapper = styled.li `
  width: 160px;
  height: 260px;

  padding: 20px 30px;

  box-sizing: content-box;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-6px);
  }

  > .item-wrap {
    > .top-cover {
      width: 100%;
      height: 160px;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        cursor: pointer;
      }
    }

    > .bottom-info {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 160px;

      text-align: center;

      .name {
        width: 160px;
        margin-top: 6px;

        font-size: 16px;
        color: #333;

        cursor: pointer;
      }

      .desc {
        width: 160px;
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