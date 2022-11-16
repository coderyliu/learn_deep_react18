import styled from "styled-components";

export const TabsWrapper = styled.div `
  display: flex;
  align-items:center;
  width:100%;
  height:40px;
  margin-top:1px;

  background-color: #f5f5f5;
  
  .item{
    flex:1;
    line-height:40px;
    border:1px solid #d3d3d3;

    text-align:center;

    &:hover{
      cursor:pointer;
      border-top-color:#c20c0c;
    }

    &.active{
      border-top-color:#c20c0c;
      border-bottom:none;

      background-color:#fff;
    }
  }
`