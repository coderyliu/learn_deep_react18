import styled from 'styled-components'

export const PlayerSectionWrapper = styled.div `
  margin-top:20px;

  .header-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;  

    padding:5px 0;

    border-bottom:3px solid #c10c0c;

    .left{
      .title{
        margin-right:20px;

        font-weight: 600;
        font-size: 20px;
      }
      .count{
        color:#666;
      }
    }

    .right{
      font-size: 12px;

      .play-count{
        font-weight: 600;
        color:#c20c0c;
      }
    }
  }

  .content-wrap{
    border:1px solid #d3d3d3;

    .table-header{
      display: flex;
      align-items: center;
      height: 34px;

      background-color: #f5f5f5;

      .section{
        height: 100%;
        padding:5px 5px 5px 10px;

        border:1px solid #d3d3d3;
        border-top:none;

        &:first-of-type{
          border-left:none;
        }

        &:last-of-type{
          border-right:none;
        }

        color:#666;
        font-size: 12px;
      }

      .sort-index{
        width:${props=>props.tableList[0].width}px;
        height: 100%;
      }

      .title{
        flex:1;
      }

      .time{
        width: ${props=>props.tableList[2].width}px;
      }

      .singer{
        width: ${props=>props.tableList[3].width}px;
      }
    }

    .table-mainner{
      .item{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding:10px 0;

        &:hover{
          .time{
            display: none;
          }

          .control{
            width:91px;
          }
        }

        .section{
          padding-left:10px;
          cursor: pointer;

          &:hover{
            text-decoration: underline;
          }
        }

        &:nth-of-type(odd){
          background-color: #f7f7f7;
        }

        .sort-index{
          width:${props=>props.tableList[0].width}px;

          color:#999;
          cursor:auto;
          text-align: center;

          &:hover{
            text-decoration: none;
          }
        }

        .song{
          flex:1;
          display: flex;
          align-items: center;

          img{
            width: 50px;
            margin-right:20px;
          }

          .player-icon,
          .mv-icon{
            display: block;
            width: 28px;
            height: 17px;
            margin-right:10px;

            cursor: pointer;

            background: url(${require('@/assets/img/sprite_table.png')}) no-repeat 0 -103px;
          }

          .mv-icon{
            background-position:0 -151px;

            &:hover{
              background-position:-30px -151px;
            }
          }

          .name{
            flex:1;
          }
        }

        .time{
          width:${props=>props.tableList[2].width}px;
          color:#666;
        }

        .like-count,
        .play-count,
        .time,
        .date{
          font-size: 12px;
          color:#666;
        }

        .play-count{
          width:90px;
        }

        .date{
          width:90px;
        }

        .like-count{
          width:50px;
        }

        .control{
          display: flex;
          align-items: center;
          width: 0px;

          span{
            display: block;
            width: 18px;
            height: 16px;
            margin-right:5px;

            cursor: pointer;
            background: url(${require('@/assets/img/sprite_11.png')}) no-repeat 0 9999px;
          }

          .add{
            width: 13px;
            height: 16px;

            background-image: url(${require('@/assets/img/sprite_10.png')});
            background-position: 0 -700px;
          }

          .collect{
            background-position: 0 -174px;
          }

          .share{
            background-position: 0 -195px;
          }

          .download{
            background-position: -81px -174px;
          }
        }

        .singer{
          width:${props=>props.tableList[3].width}px;
          color:#666;
        }
      }
    }
  }
`