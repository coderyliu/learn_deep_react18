import styled from "styled-components";

export const CommentWrapWrapper=styled.div `
  display: flex;
  align-items:flex-start;
  width:100%;
  padding:15px 0;
  border-bottom:1px dashed #ccc;

  .left{
    width:50px;
    height:50px;
    margin-right:15px;

    img{
      width:100%;
      height:100%;

      cursor:pointer;
      object-fit:cover;
    }
  }

  .right{
    flex:1;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    height: 95px;

    .top{
      flex:1;
      width:100%;

      color:#333;
      font-size:12px;

      .name{
        cursor: pointer;
        color:#0c73c2;
      }
    }

    .bottom{
      display: flex;
      justify-content:space-between;
      width:100%;
      height: 17px;

      color:#999;
      font-size:12px;

      .btn{
        display: flex;
        align-items:center;

        .icon{
          display: block;
          width:15px;
          height: 17px;
          padding-left:15px;
          margin-right:5px;

          cursor:pointer;
          background:url(${require('@/assets/img/icon2.png')}) no-repeat -150px 0;
        }

        .count{
          &:hover{
            text-decoration:underline;
          }
        }

        .gap{
          margin:0 5px;
        }
      }
    }
  }
`