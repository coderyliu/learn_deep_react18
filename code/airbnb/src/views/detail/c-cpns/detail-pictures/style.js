import styled from "styled-components";

export const DetailPicturesWrapper = styled.div `
  position: relative;

  > .pictures-wrapper{
    display: flex;
    height:600px;
    box-sizing: border-box;

    &:hover{
      .bg-cover{
        opacity: 1 !important;
      }

      .item:hover{
        .bg-cover{
          opacity: 0 !important;
        }
      }
    }

    .left,.right{
      width:50%;
      height: 100%;
      
      .item{
        position: relative;
        height: 100%;
        border:1px solid black;
        cursor: pointer;
        overflow: hidden;

        &:hover{
          .cover{
            transform: scale(1.1);
          }
        }

        .cover{
          width:100%;
          height:100%;
          object-fit: cover;

          transition:transform 200ms ease;
        }

        .bg-cover{
          position: absolute;
          z-index:9;
          left:0;
          right:0;
          top:0;
          bottom:0;
          opacity: 0;
          background-color:rgba(0,0,0,.4);
          transition: opacity 250ms ease-in;
        }
      }
    }

    .right{
      display: flex;
      flex-wrap: wrap;

      .item{
        width:50%;
        height:50%;
      }
    }
  }

  .show-btn{
    position: absolute;
    z-index:99;
    right:15px;
    bottom:15px;
    line-height:22px;
    padding:6px 15px;
    border-radius: 4px;
    background-color:#fff;
    cursor: pointer;
  }
`