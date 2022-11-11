import styled from "styled-components";

export const RadioHeaderWrapper=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  margin-top:20px;
  padding:5px 0;
  border-bottom:2px solid #c20c0c;

  .left{
    font-size: 22px;
  }

  .right{
    .more{
      font-size: 12px;
      color:#666;

      &:hover{
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .outer-wrap{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width:125px;

      font-size: 12px;

      .gap{
        color:#999;
      }

      .fast,
      .hot{
        &:hover{
          cursor:pointer;
          text-decoration: underline;
        }
      }
    }
  }
`