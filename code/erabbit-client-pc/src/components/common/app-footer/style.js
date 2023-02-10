import styled from "styled-components";

export const AppFooterWrapper=styled.div`
  width:100%;
  height: 638px;
  padding-top:30px;

  box-sizing:content-box;

  .footer-top{
    width:100%;
    height: 290px;

    background-color:#fff;

    .top-wrap{
      display: flex;
      justify-content:space-around;
      align-items:center;
      
      width:1240px;
      height: 100%;
      margin:0 auto;

      .top-item{
        width: 196px;
        height: 190px;
        padding:0 72px;
        border-right:1px solid #f2f2f2;

        box-sizing:content-box;

        &:nth-of-type(1){
          padding-left:0;
        }

        &:nth-of-type(4){
          border-right:none;
        }

        .desc-font{
          font-size:18px;
          text-align:center;
          color:#999;
        }

        .service-info{
          margin-top:36px;

          .phone,.time{
            color:#666;
            text-align:center;
            font-size:20px;
            padding:10px 0 0;
          }

          .time{
            padding-top:2px;

            color:#999;
            font-size:12px;
          }
        }

        .desc-info{
          display: flex;
          justify-content:space-around;
          align-items:center;

          margin-top:36px;
          box-sizing:content-box;

          .block{
            width: 90px;
            height: 80px;
            border:1px solid #ededed;
            padding-top:5px; 
            margin-right:10px;

            font-size:38px;
            text-align:center;

            cursor:pointer;
            box-sizing:content-box;

            .desc-title{
              margin-top:3px;

              color:#666;
              font-size:14px;
            }
          }

          .download-desc{
            width:106px;
            height: 78px;

            .download{
              padding:0 0 5px 0;

              text-align:center;
              font-size:14px;
              color:#999;
            }

            .download-btn{
              display: block;
              width:106px;
              line-height: 34px;
              border-radius:5px;

              color:#fff;
              font-size:14px;
              text-align:center;

              cursor:pointer;
              background-color:#27ba9b ;
            }
          }
        }

        .download-code{
          img{
            width:76px;
            height: 76px;

            object-fit:cover;
          }
        }
      }
    }
  }

  .footer-bottom{
    width:100%;
    height: 348px;

    box-sizing:content-box;
    background-color:#333 ;

    .bottom-wrap{
      width:1240px;
      height: 100%;
      margin:0 auto;

      > .top{
        display: flex;
        justify-content:space-around;
        align-items:center;

        width:100%;
        height:57px;
        padding:60px 0;
        border-bottom:1px solid #434343; 

        box-sizing:content-box;

        .bottom-item{
          display: flex;
          justify-content:center;
          align-items:center;

          color:#fff;
          font-size:45px;
          font-weight:300;

          .bottom-item-title{
            margin-left:10px;
            font-size:28px;
          }
        }
      }

      > .bottom{
        display: flex;
        flex-direction:column;
        align-items:center;
        width:100%;
        padding-top:40px;

        .bottom-explain-list{
          display: flex;
          align-items:center;

          color:#999;
          font-size:16px;

          .explain-item{
            padding:0 10px;
            border-right:1px solid #999;

            cursor:pointer;

            &:last-of-type{
              border-right:none;
            }
          }
        }

        .copy-right{
          margin-top:10px;

          text-align:center;
          color:#999;
          font-size:16px;
        }
      }
    }
  }
`