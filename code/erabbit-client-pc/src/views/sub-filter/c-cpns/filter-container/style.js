import styled from "styled-components";

export const FilterContainerWrapper=styled.ul`
  width:100%;
  padding:25px;
  margin-top:20px;

  background-color:#fff ;

  .sub-wrapper{
    display: flex;
    align-items:flex-start;

    .sub-name{
      flex-basis:80px;
      line-height:40px;

      color:#999;
      font-size:14px;
    }

    .sub-wrap{
      flex:1;
      display: flex;
      flex-wrap:wrap;
      align-items:center;

      margin-left:10px;

      .sub-item{
        max-width:120px;
        line-height:40px;
        margin-right:20px;

        color:#333;
        font-size:14px;

        cursor:pointer;

        &:hover{
          color:#27ba9b;
        }

        &.active{
          color:#27ba9b;
        }
      }
    }
  }
`