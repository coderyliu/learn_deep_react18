import styled from "styled-components";

export const RankItemWrapper=styled.div`
  flex:1;

  width:230px;
  border-right:1px solid #eeeeee;

  .rank-name{
    display: flex;
    align-items: center;

    padding:20px;

    .left{
      width:80px;
      margin-right:10px;

      box-shadow: 0 0 5px rgba(0,0,0,.1);

      img{
        width:80px;
      }
    }

    .right{
      flex:1;
      display: flex;
      flex-direction: column;

      .name{
        font-weight: 600;

        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }

      .btn{
        display: flex;

        height:52px;
        margin-top:10px;

        .start,
        .add{
          display: block;
          width: 25px;
          height: 25px;

          cursor: pointer;
          background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -267px -205px;
        }

        .add{
          margin-left:10px;
          background-position: -300px -205px;
        }
      }
    }
  }

  .rank-list{
    color: #000;

    .item{
      position: relative;
      display: flex;
      align-items: center;

      padding:5px 10px 5px 20px;

      &:nth-of-type(even){
        background-color: #fff;
      }

      &:nth-of-type(odd){
        background-color: #eee;
      }

      &:last-of-type{
        display: flex;
        justify-content: flex-end;
        align-items: center;

        cursor: pointer;
      }

      &:hover{
        .control{
          width:75px;
        }
      }

      .index{
        padding-right:10px;

        color:#666;
      }

      .index.active{
        color:#C10D0c;
      }

      .control{
          position: absolute;
          z-index:99;
          right:0;
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

          .play{
            width:25px;
            height: 25px;
            background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -267px -205px;
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
        }

      .name{
        width:100px;
        cursor:pointer;

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
`