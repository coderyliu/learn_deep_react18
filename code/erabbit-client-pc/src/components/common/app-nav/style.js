import styled from "styled-components";

export const AppNavWrapper=styled.div`
  width:100%;
  height: 53px;

  background-color:#333 ;

  .app-nav-wrap{
    display: flex;
    align-items:center;

    width: 1240px;
    height: 100%;
    margin:0 auto;

    > .gap{
      flex:1;
    }

    > .item{
      padding:0 15px;
      line-height:14px;
      border-right:1px solid #666;

      color:#cdcdcd;
      font-size:14px;

      &:first-of-type{
        line-height:16px;
      }

      &:last-of-type{
        border-right:none;
      }

      &:hover{
        color:rgb(39,186,128);

        cursor:pointer;
      }
    }
  }
`