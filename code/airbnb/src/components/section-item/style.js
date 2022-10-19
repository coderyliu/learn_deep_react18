import styled from "styled-components";

export const SectionItemWrapper = styled.div `
  flex-shrink: 0;
  box-sizing: border-box;
  width:${props=>props.itemWidth};
  padding:8px;

  .section-item{
    width:100%;

    .slider{
      position: relative;
      cursor: pointer;

      &:hover{
        > .control{
          display: flex;
        }
      }

      > .control{
        position: absolute;
        z-index:9;
        left:0;
        right:0;
        top:0;
        bottom:0;
        display: none;
        justify-content: space-between;
        color:#fff;

        .btn{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(to left,transparent 0%, rgba(0,0,0,.25) 100%);

          &.right{
            background: linear-gradient(to right,transparent 0%, rgba(0,0,0,.25) 100%);
          }
        }
      }

      .indicator{
        position: absolute;
        z-index: 19;
        left:0;
        right:0;
        bottom:10px;
        width:30%;
        margin:0 auto;

        .item{
          display: flex;
          justify-content: center;
          align-items: center;
          width:14.29%;

          .dot{
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #fff;

            &.active{
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }

    .cover{
      position:relative;
      box-sizing: border-box;
      padding:66.66% 8px 0;
      border-radius:3px;
      overflow: hidden;
      cursor:pointer;

      .picture{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .desc{
      margin:10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color:${props=>props.verifyColor};
    }

    .name{
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
      cursor: pointer;
    }

    .price{
      margin:8px 0;
    }

    .bottom{
      display: flex;
      align-items:center;
      font-size: 12px;
      font-weight: 600;
      color:${props=>props.theme.text.primaryColor};

      .count{
        margin:0 2px 0 4px;
      }

      .MuiRating-decimal {
        margin-right: -2px;
      }
    }
  }
`