import styled from 'styled-components'

export const SettleSingerWrapper=styled.div`
  padding:10px;

  .header-section{
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding:5px 0;
    border-bottom:1px solid #d3d3d3; 

    .title{
      font-weight: 600;
    }

    .more{
      font-size: 12px;
      color:#666;

      cursor: pointer;
    }
  }

  .artist-list{
    display: flex;
    flex-direction: column;

    .item{
      display: flex;
      align-items: center;
      margin-top:10px;

      border:1px solid #e9e9e9;
      cursor: pointer;

      background-color: #fafafa;

      .left{
        width:62px;
        height: 62px;

        img{
          width:100%;
        }
      }

      .right{
        flex:1;
        margin-left:10px;

        font-size: 12px;

        .name{
          font-weight: 600;
        }

        .disk{
          color:#666;
        }
      }
    }
  }

  .apply{
    line-height: 31px;
    margin-top:15px;
    border:1px solid #ccc;

    text-align: center;
    font-size: 12px;
    font-weight: 600;

    cursor: pointer;
    box-shadow: 1px 2px 2px rgba(0,0,0,.1);
    background-color: #f5f5f5;
  }
`