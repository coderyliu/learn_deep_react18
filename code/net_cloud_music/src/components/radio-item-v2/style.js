import styled from "styled-components";

export const RadioItemV2Wrapper=styled.div`
  display: flex;
  align-items: center;
  width: 435px;
  height: 120px;
  padding:15px 0 20px;
  margin-right:14px;
  border-bottom:1px solid #d3d3d3;
  
  box-sizing: content-box;

  .picture{
    width:120px;
    height: 120px;
    margin-right:15px;

    cursor: pointer;
    img{
      width:100%;
      height:100%;
    }
  }

  .info{
    flex:1;

    .name{
      margin-top:-10px;
      font-weight: 600;
      font-size: 16px;

      cursor: pointer;
    }

    .desc{
      display: flex;
      align-items: center;
      margin-top:10px;

      font-size: 12px;
      color:#666;

      .program{
        margin-right:10px;
      }
    }
  }
`