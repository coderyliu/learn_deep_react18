import styled from "styled-components";

export const SongPanelWrapper = styled.div `
  display: flex;
  width:100%;

  .left-cover{
    width: 206px;
    margin-right:20px;

    .cover_img{
      position: relative;
      width:206px;
      height: 205px;

      img{
        width:100%;
        height: 100%;

        border-radius: 50%;
        transform: scale(0.7);
      }

      .cover{
        position: absolute;
        z-index:95;
        top:-4px;
        right:0;
        bottom:0;
        left:-4px;

        background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat -140px -580px;
      }
    }

    .tip{
      display: flex;
      align-items: center;
      margin-top:10px;
      padding-left:40px;

      .tip-icon{
        display: block;
        width: 16px;
        height: 16px;

        background: url(${require('@/assets/img/sprite_icon2.png')}) no-repeat -34px -863px;
      }

      .outer-link{
        cursor: pointer;
        color:#0c73c2;
        text-decoration: underline;
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

          background: url(${require('@/assets/img/sprite_icon2.png')}) no-repeat 0 -463px;
        }
      }

      .album,
      .singer{
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
    }

    .bottom-lyric{
      margin-top:30px;

      .lyric-info{
        width:100%;
        height:${props=>props.lyricHeight}px;

        overflow: hidden;
        font-size: 12px;
        
        transition:all 300ms ease;

        .item{
          padding:3px 0;
        }
      }

      .tip-btn{
        margin-top:5px;
        font-size:12px;

        span{
          color:#0c73c2;
          cursor: pointer;
        }
      }
    }
  }
`