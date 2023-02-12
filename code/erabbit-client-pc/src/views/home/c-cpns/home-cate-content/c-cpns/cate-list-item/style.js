import styled from "styled-components";

export const CateListItemWrapper = styled.div`
  width: 360px;
  margin: 10px;
  border: 1px solid #e7e7e7;
  border-radius: 10px;

  background-color:#fff ;

  &:nth-of-type(2) {
    margin: 10px 0;
  }

  &:nth-of-type(5) {
    margin: 10px 0;
  }

  &:nth-of-type(8) {
    margin: 10px 0;
  }
  .item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 360px;
    height: 100px;

    .left-cont {
      width: 85px;
      height: 85px;
      padding: 10px;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;

        cursor: pointer;
        object-fit: cover;
      }
    }

    .right-cont {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .name {
        width: 250px;
        padding: 5px 0;

        color: #666;
        font-size: 16px;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      .desc {
        width: 250px;
        padding: 0 0 5px 0;

        color: #999;
        font-size: 14px;
      }

      .price {
        color: #cf4444;
      }
    }
  }
`;
