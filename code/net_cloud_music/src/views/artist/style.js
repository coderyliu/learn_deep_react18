import styled from "styled-components"

export const ArtistWrapper = styled.div `
  width:100%;
  margin-top:30px;

  background-color:#f5f5f5;

  .artist-wrap{
    display: flex;
    width:980px;
    margin:0 auto;

    border:1px solid #d3d3d3;
    border-bottom:none;

    background-color: #fff;

    box-sizing:content-box;

    .left-cont{
      width:710px;
      padding:40px;
      border-right:1px solid #d3d3d3;

      .top-info{
        display: flex;
        flex-direction:column;
        align-items:flex-start;

        .info{
          display: flex;

          .name{
            margin-right:15px;
            font-size:22px;
            font-weight:600;
          }

          .alias-list{
            display: flex;
            align-items:center;

            .item{
              margin-right:2px;
              font-size:12px;
              color:#999;
            }
          }
        }

        .avatar{
          width:630px;
          height:300px;
          margin-top:5px;

          box-shadow:0 0 2px rgba(0,0,0,.8);

          img{
            width: 100%;
            height:100%;

            object-fit:cover;
          }
        }
      }

      .disk-wrap{
        width:100%;

        .content-wrap{
          display: flex;
          flex-wrap:wrap;
          margin-left:-20px;
        }

        .pagination{
          display: flex;
          justify-content:center;
          align-items:center;

          margin-top:30px;
        }
      }
    }

    .right-cont{
      width:270px;
      padding:40px 20px;
      box-sizing:border-box;
    }
  }
`