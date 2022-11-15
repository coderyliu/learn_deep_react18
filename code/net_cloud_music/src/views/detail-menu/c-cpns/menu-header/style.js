import styled from "styled-components";

export const MenuHeaderWrapper = styled.div `
  display: flex;
  width:100%;

  .left-cover{
    width: 206px;
    margin-right:20px;

    .cover_img{
      position: relative;
      width:206px;
      height: 205px;
      padding:2px;

      border:1px solid #d3d3d3;

      img{
        width:100%;
        height: 100%;
      }
    }
  }

  .right-content{
    .top-info{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .name{
        display: flex;
        align-items: center;

        font-size: 22px;
        font-weight: 600;

        .icon{
          display: block;
          width: 54px;
          height: 24px;
          margin-right:5px;

          background: url(${require('@/assets/img/sprite_icon2.png')}) no-repeat 0 ${props=>props.topPosition}px;
        }
      }

      .singer,
      .pub-time,
      .pub-company{
        margin-top:5px;
        font-size: 12px;

        .title{
          color:#666;
        }

        .text{
          color:#0c73c2;
          font-weight: 600;
        }
      }

      .create-time{
        margin-top:10px;
        color:#999;
        font-size: 12px;
      }

      .btn-wrap{
        display: flex;
        align-items: center;
        margin-top:10px;

        div{
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 66px;
          height: 31px;
          margin-right:8px;

          font-size: 12px;
          cursor: pointer;
        }

        div .icon{
          display: block;

          background: url(${require('@/assets/img/sprite_button2.png')}) no-repeat 0 9999px;
        }

        div .left-icon{
          position: absolute;
          right:0;
          display: block;
          width: 2px;
          height:31px;

          background: url(${require('@/assets/img/sprite_button2.png')}) no-repeat right -1020px;
        }

        .player{
          width: 66px;

          color:#fff;
          background: url(${require('@/assets/img/sprite_button2.png')}) no-repeat 0 -387px;
        }

        .player .left-icon{
          background-position: right -428px;
        }

        .player .icon{
          display: block;
          width: 20px;
          height: 18px;

          background-position: 0 -1622px;
        }

        .collect{
          background: url(${require('@/assets/img/sprite_button2.png')}) no-repeat 0 -977px;
        }

        .share{
          background: url(${require('@/assets/img/sprite_button2.png')}) no-repeat 0 -1225px;
        }

        .download{
          background: url(${require('@/assets/img/sprite_button2.png')}) no-repeat 0 -2761px;
        }

        .message{
          background: url(${require('@/assets/img/sprite_button2.png')}) no-repeat 0 -1465px;
        }
      }

      .tag-wrap{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top:10px;

        font-size: 12px;
        .title{
          color:#666;
        }

        .tag-list{
          display: flex;
          align-items: center;

          .item{
            padding:1px 15px;
            margin-right:10px;

            border:1px solid #eee;
            border-radius: 15px;

            cursor: pointer;
            color:#999;
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
`