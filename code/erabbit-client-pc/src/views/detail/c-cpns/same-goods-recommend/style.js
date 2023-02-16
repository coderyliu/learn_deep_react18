import styled from "styled-components";

export const SameGoodsRecommendWrapper = styled.div`
  width:100%;
  height: 460px;
  margin-top:10px;
  margin-bottom:30px;

  > .recommend-wrap {
    background-color:#fff ;

    > .top-wrap{
      line-height: 80px;
      padding: 0 20px;

      color:#27BA9B;

      .sign-title{
        margin-left:10px;

        color:#333;
        font-size:20px;
      }
    }

    .recommend-item{
      display: flex !important;
      align-items:center;
      justify-content:center;

      /* padding-top:40px; */
      height: 380px;

      box-sizing:content-box;

      > li{
        padding:0px 20px !important;
      }
    }
  }
`;
