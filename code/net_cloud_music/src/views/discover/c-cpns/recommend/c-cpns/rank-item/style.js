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

      .index{
        padding-right:10px;

        color:#666;
      }

      .index.active{
        color:#C10D0c;
      }

      .name{
        cursor:pointer;

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
`