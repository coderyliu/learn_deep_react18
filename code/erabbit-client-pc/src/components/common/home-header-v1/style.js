import styled from "styled-components";

export const HomeHeaderV1Wrapper = styled.div `
  width:100%;
  height: 35px;
  padding:40px 0;

  display: flex;
  align-items:center;
  box-sizing:content-box;

  .left{
    flex:1;
    display: flex;
    justify-content:space-between;
    align-items:center;

    .content{
      display: flex;
      justify-content:flex-start;
      align-items:baseline;

      width:720px;

      .header-title{
        margin-right:20px;
        color:#333;

        font-weight:500;
      }

      .header-desc{
        color:#999;
        font-size:16px;
      }
    }

    .category{
      flex:1;
    }
  }

  .right{
    width:85px;

    font-size:16px;
    color:#999;

    cursor:pointer;

    &:hover{
      color:skyblue;
    }
  }
`