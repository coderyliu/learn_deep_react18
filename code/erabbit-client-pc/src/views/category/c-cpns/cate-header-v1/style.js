import styled from "styled-components";

export const CateHeaderV1Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 128px;

  text-align: center;

  > .title-wrap {
    height: 128px;
    padding:30px 0 0;

    box-sizing:border-box;

    > .title {
      font-size: 24px;
    }

    > .subtitle {
      margin-top:10px;
      font-size: 16px;
      color: #666;
    }
  }

  > .more {
    position: absolute;
    z-index: 90;
    top: 25px;
    right: 20px;

    font-size: 16px;
    color: #999;

    &:hover {
      color: rgb(136, 222, 255);

      cursor: pointer;
    }
  }
`;
