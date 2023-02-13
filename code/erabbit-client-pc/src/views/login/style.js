import styled from "styled-components";

export const AppLoginWrapper = styled.div `
  width: 100%;

  > .top-nav {
    width: 100%;
    height: 132px;

    background-color: #fff;

    .nav-outer {
      display: flex;
      align-items: center;
      width: 1240px;
      height: 100%;
      margin: 0 auto;

      > .logo {
        width: 200px;
        height: 100%;
        text-indent: -9999px;

        background: url(${require("@/assets/imgs/logo.png")}) no-repeat center
          18px / contain;
      }

      > .welcome {
        flex: 1;
        line-height: 35px;
        margin-left: 20px;

        color: #999;
        font-size: 22px;
      }

      > .navigate {
        width: 120px;
        line-height: 35px;

        font-size: 16px;
        color: rgb(39, 186, 168);

        > .desc {
          color: #333;
        }

        &:hover .desc {
          color: rgb(39, 186, 168);
          cursor: pointer;
        }
      }
    }

    > .bg-cover {
      position: relative;
      width: 100%;
      height: 488px;

      background: url(${require("@/assets/imgs/login-bg.png")}) no-repeat;
      
      > .log-wrap{
        position: absolute;
        z-index:96;
        top:50px;
        right:200px;
        bottom:50px;

        width:380px;
        background-color:#fff ;

        .top-cate{
          display: flex;
          align-items:center;

          width:100%;
          height: 55px;
          border-bottom:1px solid rgb(245, 245, 245);

          > .login{
            flex:1;

            font-size:18px;
            font-weight:500;
            text-align:center;

            cursor:pointer;

            &.active{
              color:rgb(39, 186, 168);
            }
          }
        }

        > .content{
          width:100%;
          margin-top:30px;

          .form-wrap{
            display: flex;
            flex-direction:column ;
            align-items:flex-start;

            padding:0 30px;

            > .form-item{
              position: relative;

              display: flex;
              align-items:center;
              width:100%;
              height:36px;
              padding:5px 10px;
              border:1px solid #e7e7e7;
              margin-bottom:20px;

              font-size:14px;

              &:nth-of-type(3){
                line-height:34px;

                border:none;
                padding:5px 0;
              }

              &:nth-of-type(4){
                display: block;
                width:100%;
                height:40px;
                line-height:40px;
                padding:0;

                color:#fff;
                font-size:16px;
                text-align:center;

                cursor: pointer;
                background-color:rgb(39, 186, 168) ;
              }

              &:nth-of-type(5){
                display: flex;
                justify-content:space-between;
                align-items:center;
                border:none;

                color:#999;
                
                .forget,.registry{
                  cursor: pointer;
                }
              }

              > .input-el{
                flex:1;
                
                margin-left:5px;
                
                border:none;
                outline:none;

                &::placeholder{
                  color:#999;
                }
              }

              > .secret{
                color:rgb(0, 102, 153);

                cursor:pointer;
              }
            }
          }
        }
      }
    }

    > .log-footer {
      width: 100%;
      height: 91px;
      padding: 30px 0;

      box-sizing: content-box;

      .foot-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;

        width:1240px;
        margin:0 auto;
        

        > .bottom-explain-list {
          display: flex;
          align-items: center;

          color: #999;
          font-size: 16px;

          .explain-item {
            padding: 0 10px;
            border-right: 1px solid #999;

            cursor: pointer;

            &:last-of-type {
              border-right: none;
            }
          }
        }

        > .copy-right {
          margin-top: 10px;

          text-align: center;
          color: #999;
          font-size: 16px;
        }
      }
    }
  }
`;