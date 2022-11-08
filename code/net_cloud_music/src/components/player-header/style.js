import styled from 'styled-components'

export const PlayerHeaderWrapper=styled.div`
  display: flex;
  align-items: center;
  
  .bg_cover{
    width: 150px;
    margin-right:20px;
    
    img{
      width:100%;
    }
  }
  
  .infos{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    margin-top:-20px;

    .top-desc{
      margin-bottom:20px;

      .name{
        margin-bottom:10px;
        font-size: 16px;
        font-weight: 600;
      }

      .time{
        font-size: 12px;
        color:#666;
      }

      .time-icon{
        display: inline-block;
        width:13px;
        height: 13px;
        margin-right:5px;

        background: url(${require('@/assets/img//sprite_icon2.png')}) no-repeat -18px -682px;
      }
    }

    .btns{
      display: flex;
      align-items: center;

      .icon{
        flex:1;
        padding:2px 10px;
        margin-right:5px;
        
        border:1px solid #eee;
        border-radius:6px;

        font-size: 12px;

        cursor: pointer;
        background: url(${require('@/assets/img/sprite_icon2.png')}) no-repeat 0 9999px;
      }

      /* .player{
        background-position: 0 -387px;
      }

      .subscribe{
        background-position:0 -1149px ;
      }

      .share{
        background-position: 0 -1225px;
      }

      .download{
        background-position: 0 -2761px;
      } */
    }
  }
`