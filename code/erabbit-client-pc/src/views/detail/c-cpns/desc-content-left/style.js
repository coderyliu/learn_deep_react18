import styled from "styled-components";

export const DescContentLeftWrapper=styled.div`
  flex:1;
  margin-right:20px;

  background-color:#fff;

  .toggle-header{
    display: flex;
    align-items:center;

    width:100%;
    line-height: 70px;
    border-bottom:1px solid #e7e7e7;

    font-size:18px;

    .detail-info{
      width:152px;
      height: 100%;
      border-right:1px solid #e7e7e7;

      text-align:center;

      cursor:pointer;
    }

    > .comment{
      flex:1;
      height:100%;
      padding-left:30px;

      cursor:pointer;
    }

    > .active{
      color:#27ba9b;

      border-bottom:1px solid #27ba9b;
    }
  }
`