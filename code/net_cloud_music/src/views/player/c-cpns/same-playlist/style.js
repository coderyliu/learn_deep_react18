import styled from "styled-components";

export const SongPlayListWrapper=styled.div`
  width:100%;

  .top{
    width:100%;
    padding-bottom:5px;
    font-size: 12px;
    font-weight: 600;

    border-bottom:1px solid #d3d3d3;
  }

  .play-list{
    width:100%;
    margin-top:5px;

    .item{
      display: flex;
      align-items: center;
      padding:10px 0;

      cursor: pointer;

      .avatar{
        width:50px;
        height: 50px;
        margin-right:10px;

        img{
          width:100%;
          height:100%;
        }
      }

      .info{
        flex:1;

        font-size: 12px;

        .creator{
          color:#666;
        }
      }
    }
  }
`