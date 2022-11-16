import styled from "styled-components"

export const MVItemV1Wrapper=styled.div`
  width:140px;
  padding:20px 0 0 20px;

  box-sizing:content-box;

  .picture{
    position: relative;
    width: 140px;
    height: 105px;

    img{
      width:100%;
      height: 100%;

      cursor:pointer;
    }

    .play-icon{
      position: absolute;
      z-index:90;
      top:50%;
      left:50%;
      width: 44px;
      height: 44px;

      cursor:pointer;
      transform:translate(-50%,-50%);
      background: url(${require('@/assets/img/iconall.png')}) no-repeat -30px -135px;

      &:hover{
        background-position:-30px -85px ;
      }
    }
  }

  .info{
    display: flex;
    flex-direction:column;
    align-items:flex-start;

    .name,
    .time{
      font-size:12px;

      &:hover{
        cursor: pointer;
        text-decoration:underline;
      }
    }

    .time{
      color:#999;
    }
  }
`