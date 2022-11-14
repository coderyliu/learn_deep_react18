import styled from "styled-components";

export const AppPlayerBarWrapper = styled.div `
  position: fixed;
  bottom:0;
  right:0;
  left:0;

  color:#fff;
  background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat;
  background-size: cover;
  background-color: #222;

  .player-bar-wrap{
    display: flex;
    align-items: center;
    width:980px;
    height:47px;
    margin:0 auto;

    .control-btns{
      display: flex;
      align-items: center;
      width:137px;

      span{
        display: block;
        width:28px;
        height: 28px;

        cursor: pointer;
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat 0 9999px;
      }

      .prev{
        background-position: 0 -130px ; 
      }

      .start,.stop{
        width:36px;
        height:36px;
        margin:0 10px;

        background-position: 0 -204px;
      }

      .stop{
        background-position: 0 -165px;
      }

      .next{
        background-position: -80px -130px;
      }
    }

    .infos{
      display: flex;
      align-items: center;
      padding-top:5px;

      .cover_pic{
        width: 34px;
        height: 35px;
        margin-right:10px;

        cursor: pointer;

        img{
          width:100%;
          height:100%;
        }
      }

      .progress{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width:581px;

        .info{
          height:14px;
          padding-left:5px;
          font-size: 12px;

          .name{
            color:#e8e8e8;
            margin-right:10px;
          }

          .singer{
            color:#9b9b9b;
          }
        }

        .slider{
          flex:1;
          display: flex;
          align-items: center;

          .ant-slider{
            width:466px;
            height: 9px;

            .ant-slider-handle{

            }
          }

          .time{
            margin-left:5px;
            font-size:12px;
            color:#797979;

            .gap{
              margin:0 1px;
            }
            
            .currentTime{
              color:#a1a1a1;
            }
          }
        }
      }
    }

    .player-btns{
      display: flex;
      width:213px;

      .left,.right{
        display: flex;
        align-items: center;
      }

      .left{
        padding-right:15px;
      }

      .right{
        padding-left:10px;
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat -147px -238px;
      }

      .section{
        display: block;
        width: 25px;
        height: 25px;
        padding:0 2px;

        box-sizing: content-box;
        cursor: pointer;
        background: url(${require('@/assets/img/playbar_sprite.png')}) no-repeat 0 999px;
      }
      
      .add{
        background-position: -88px -163px;
      }

      .share{
        background-position: -114px -163px;
      }

      .sound{
        background-position: -2px -248px;
      }

      .loop{
        background-position: -3px -348px;
      }

      .order{
        background-position: -66px -248px;
      }

      .single{
        background-position:-66px -346px ;
      }

      .playlist{
        width:38px;
        line-height:27px;
        padding-left:27px;

        box-sizing:content-box;

        font-size: 12px;
        color:#666;
        background-position: -42px -68px;
      }
    }
  }
`