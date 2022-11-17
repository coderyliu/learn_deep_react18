import styled from "styled-components";

export const CommentHeaderWrapper=styled.div`
  > .title{
    border-bottom:2px solid #c20c0c;

    > .name{
      margin-right:15px;
      font-size:18px;
      font-weight:600;
    }

    .count{
      font-size:13px;
      color:#666;
    }
  }

  .comment{
    display: flex;
    align-items:flex-start;

    width:100%;
    margin-top:15px;

    > .left{
      width:50px;
      height: 50px;

      margin-right:15px;

      img{
        width:100%;
        height:100%;

        cursor:pointer;
      }
    }

    > .right{
      flex:1;

      #text{
        width:100%;
        height: 80px;
        padding:6px 10px;
        border-color:#d3d3d3;

        outline:none;

        font-size:12px;
        color:#333;

        box-sizing:border-box;
      }

      .control{
        display: flex;
        flex-direction:row-reverse;
        align-items:center;

        .count{
          order:1;
          line-height:25px;

          margin-right:10px;
          font-size:12px;
          color:#666;
        }

        .send{
          display: block;
          width:46px;
          height: 25px;
          line-height:25px;
          border-radius:5px;

          box-sizing:content-box;
          text-align:center;
          color:#fff;
          font-size:12px;

          cursor:pointer;
          background:url(${require('@/assets/img/button.png')}) no-repeat -84px -64px;
        } 
      }
    }
  }
`