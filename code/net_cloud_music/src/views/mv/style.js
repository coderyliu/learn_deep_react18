import styled from "styled-components";

export const MVCpnWrapper=styled.div`
  width:100%;
  margin-top:30px;

  background-color:#f5f5f5;

  .mv-wrap{
    display: flex;
    width:980px;
    margin: 0 auto;

    border:1px solid #d3d3d3;
    border-bottom:none;

    background-color:#fff;

    .left-cont{
      width:710px;
      padding:40px 30px;
      border-right:1px solid #d3d3d3;
    }

    .right-cont{
      width:270px;
      padding:40px 20px;
    }
  }
`