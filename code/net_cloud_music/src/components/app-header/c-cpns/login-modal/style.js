import styled from "styled-components";

export const LoginModalWrapper = styled.div `
  position: fixed;
  z-index:100;
  top:0;
  right:0;
  bottom:0;
  left:0;

  .login-content{
    position: absolute;
    z-index:102;
    top:50%;
    left:50%;
    
    width:530px;
    height: 356px;
    border-radius: 5px;
    
    transform: translate(-50%,-50%);
    background-color: #fff;
  
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width:100%;
      height:39px;
      padding:0 20px;
      border:1px solid #191919;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      background-color: #2d2d2d;

      .title{
        color:#fff;
        font-size: 12px;
      }

      .close{
        display: block;
        width: 10px;
        height: 10px;

        cursor: pointer;
        background: url(${require('@/assets/img/login-cover.png')}) no-repeat 0 -95px;
      }
    }

    .content{
      display: flex;
      align-items: center;
      width:100%;
      margin-top:35px;

      .left{
        flex:1;
        padding-left:60px;

        .bg_cover{
          width: 220px;
          height:120px;

          background: url(${require('@/assets/img/bg_login_cover.png')}) no-repeat 0 0;
        }

        .login,
        .registry{
          width:200px;
          line-height:30px;
          
          font-size: 12px;
          color:#fff;
          text-align: center;

          cursor:pointer;
          background: url(${require('@/assets/img/login-btn.png')}) no-repeat 0 9999px;
          background-position: 0 -387px;

          &:hover{
            box-shadow: 0 1px 2px rgba(0,0,0,.5);
          }
        }

          .registry{
            margin-top:10px;

            color:#333;
            background-position: 0 -59px;
          }
      }

      .right{
        width:187px;
        padding-left:33px;
        border-left:1px dashed #cccccc;

        .item{
          display: flex;  
          justify-content: flex-start;
          align-items:center;
          margin-bottom: 10px;

          font-size: 12px;
        }

        .icon{
          display: block;
          width: 38px;
          height: 38px;
          margin-right:10px;

          cursor: pointer;
          background: url(${require('@/assets/img/login_logo.png')}) no-repeat 0 9999px;
        }

        .way{
          color:#333;

          &:hover{
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .wx{
          background-position: -150px -670px;
        }

        .qq{
          background-position: -190px -670px;
        }

        .wb{
          background-position: -231px -670px;
        }

        .wy{
          background-position: -271px -670px;
        }
      }
    }

    .bottom{
      display: flex;
      align-items: center;
      line-height: 17px;
      margin-top:30px;
      padding-left:30px;

      font-size: 12px;

      .radio-el{
        margin-right:3px;
      }

      .agree{
        color:#666;
      }

      .section{
        color:#507DAF;

        &:hover{
          text-decoration: underline;
        }
      }
    }

    .content-phone{
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top:50px;

      .phone-number,
      .cate-number{

        .phone,
        .cate{
          display: block;
          width:360px;
          height: 36px;
          padding:10px 20px;

          border:none;
          border:1px solid #c5cddb;
          border-radius: 25px;
          
          color:#333;
          outline: none;
        }
      }

      .cate-number{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:360px;

        margin-top:20px;

        .cate{
          width:193px;
        }

        .btn{
          width:119px;
          line-height: 36px;
          border-radius: 25px;

          color:#fff;
          text-align: center;

          cursor: pointer;
          background: #ff3a3a;
        }
      }

      .login-btn{
        width:360px;
        line-height: 36px;
        margin-top:20px;
        border-radius: 25px;

        color:#fff;
        text-align: center;

        cursor: pointer;
        background: #ff3a3a;
      }
    }

    .phone-bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top:70px;
      padding:0 20px;

      height:48px;
      border-top:1px solid #d3d3d3;

      background-color: #f7f7f7;

      .other,
      .account{
        font-size: 12px;
        color:#0c72c3;

        &:hover{
          text-decoration: underline;
        }
      }

      .account{
        color:#666;
      }
    }
  }

  .layer_cover{
    position: fixed;
    z-index:101;
    top:0;
    right:0;
    bottom:0;
    left:0;

    background-color: rgba(0,0,0,.5);
  }
`