import styled from "styled-components";

export const AppBreadWrapper=styled.div`
  width:100%;
  height: 70px;

  background-color:#e7e7e7;

  .app-bread-wrap{
    width:1240px;
    height: 100%;

    margin: 0 auto;

    .bread-item{
      display: inline-block;
      height:100%;
      line-height:70px;

      color:#666;
      font-size:14px;

      cursor:pointer;

      &:hover{
        color:#333;
      }
    }
  }
`