import styled from "styled-components";

export const SameSongWrapper = styled.div `
  width:100%;
  margin-top:20px;

  .top{
    width:100%;
    padding-bottom:5px;
    font-size: 12px;
    font-weight: 600;

    border-bottom:1px solid #d3d3d3;
  }

  .same-song-list{
    
    .item{
      display: flex;
      align-items: center;
      width:100%;
      padding:10px 0;
    }

    .info{
      flex:1;
      font-size: 12px;

      .name{
        &:hover{
          cursor: pointer;
          text-decoration: underline;
        }
      }

      .avatar{
        color:#666;
      }
    }

    .operation{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width:36px;

      .btn{
        display: block;
        width: 10px;
        height: 11px;

        opacity:0.9;
        cursor: pointer;
        background: url(${require('@/assets/img/sprite_icon3.png')}) no-repeat 0 9999px;
      }

      .player-icon{
        background-position: -69px -455px;
      }

      .add-icon{
        background-position: -87px -454px;
      }
    }
  }
`