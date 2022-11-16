import styled from "styled-components";

export const MVRecommendItemWrapper=styled.div`
  width:100%;
  padding:5px 0 5px;
  .outer{
    display: flex;
    align-items:center;
    width:100%;

    .left{
      position: relative;
      width:96px;
      height:54px;
      margin-right:10px;

      img{
        width:100%;
        height: 100%;

        cursor: pointer;
        object-fit:cover;
      }

      .btn{
        position: absolute;
        z-index:9;
        top:0;
        right:0;
        display: flex;
        align-items:center;
        height:15px;

        transform:scale(0.9);

        .icon{
          display: block;
          width: 15px;
          height: 10px;
          margin-right:3px;

          cursor:pointer;
          background: url(${require('@/assets/img/icon2.png')}) no-repeat -60px -310px;
        }

        .count{
          line-height:10px;

          font-size:12px;
          color:#fff;
        }
      }
    }

    .right{
      flex:1;
      display: flex;
      flex-direction:column;
      align-items:flex-start;

      font-size:12px;

      .name{
        color:#333;
      }

      .time,.creator{
        color:#666;
        transform: scale(0.95);
      }

      div:hover{
        text-decoration:underline;
      }
    }
  }
`