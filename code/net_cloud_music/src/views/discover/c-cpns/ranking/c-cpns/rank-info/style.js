import styled from "styled-components";

export const RankInfoWrapper=styled.div`
  width:100%;

  padding:10px 0;

  .section{
    .title{
      padding:20px 0 10px 20px;

      font-weight: 600;
    }

    .list{
      .item{
        display: flex;
        padding:10px 0 10px 20px;

        cursor: pointer;

        .left{
          width: 40px;
          margin-right:10px;

          img{
            width:100%;
          }
        }

        .right{
          flex:1;
          display: flex;
          flex-direction: column;

          .name{
            font-weight: 600;
          }

          .update{
            font-size: 12px;
            color:#666;
          }
        }

        &:hover{
          background-color: #e6e6e6;
        }
      }

      .item.active{
        background-color: #e6e6e6;
      }
    }
  }
`