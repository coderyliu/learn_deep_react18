import styled from "styled-components";

export const DownloadWrapper = styled.div `
  width:100%;

  .top_wrap{
    display: flex;
    justify-content: space-around;

    width:100%;
    height: 760px;
    padding:80px 0 0;

    background: url(${require('@/assets/img/download_cover.png')}) no-repeat center center ;
    background-size: cover;

    .section{
      display: flex;
      flex-direction: column;
      align-items: center;

      .title{
        font-size: 20px;
        color:#fff;
        text-align: center;

        opacity: 0.8;
      }

      .pic{
        width:100%;
        margin-top:20px;

        img{
          width:100%;
          height: 100%;
        }
      }

      .download-btn{
        width:300px;
        height:65px;
        line-height: 65px;
        margin-top:30px;
        border-radius: 65px;

        font-size: 20px;
        text-align:center;

        cursor: pointer;
        background-color: #fff;
        color:#d10000;
      }
    }

    .pc{
      width:557px;
    }

    .phone{
      width:300px;
    }
  }

  .list_wrap{
    .section{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width:100%;
      padding:100px 196px;
      border-bottom:1px solid #e3e3e3;

      &:nth-of-type(even){
        flex-direction: row-reverse;
        background-color: #f8f8f8;
      }

      .info{
        .title{
          font-size: 30px;
          font-weight: 600;
        }

        .desc{
          font-size: 16px;
          color:#666;

          .protrude{
            color:#c20c0c;
          }
        }
      }
    }
  }

  .code{
    position: fixed;
    z-index:90;
    top:395px;
    right:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:16px 18px 9px;
    border-radius: 15px;

    cursor: pointer;
    background-color: #fff;
    box-shadow:0 0 10px rgba(0,0,0,.5);

    img{
      width:100px;
      height:100px;
    }
  }
`