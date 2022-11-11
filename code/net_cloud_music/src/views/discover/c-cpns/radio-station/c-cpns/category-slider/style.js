import styled from "styled-components";

export const CategorySliderWrapper = styled.div `
  position: relative;
  width:100%;
  height: 194px;

  .control{
    position: absolute;
    z-index:99;
    top:0;
    right:-20px;
    bottom:0;
    left:-20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn{
      width:20px;
      height: 30px;

      opacity: 0.25;
      cursor: pointer;
      background: url(${require('@/assets/img/radio_slide.png')}) no-repeat 0 9999px; 

      &:hover{
        opacity: 0.5;
      }
    }

    .left{
      pointer-events: ${props=>props.page===0?'none':''};

      background-position: 0 -30px;
    }

    .right{
      pointer-events: ${props=>props.page===1?'none':''};

      background-position: -30px -30px;
    }
  }

  .slider-wrap{
    position: relative;

    width:900px;
    height: 194px;

    overflow: hidden;

    .inner-wrap{
      position: absolute;
      z-index:99;
      left:0;
      display: flex;
      height: 194px;
    }

    .inner{
      display: flex;
      flex-wrap: wrap;
      width:900px;
      height: 194px;

      .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:70px;
        height: 72px;
        margin-left:28px;
        margin-top:8px;

        &.active{
          color:#d35757;
          border:2px solid #d35757;
          border-radius: 5px;

          .image{
            background-position:-48px 0;
          }
        }

        .name{
          cursor: pointer;

          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }

  .indicator{
    position: absolute;
    z-index:99;
    left:50%;
    bottom:-10px;
    display: flex;
    align-items: center;

    transform: translateX(-50%);
    .item{
      width:6px;
      height:6px;
      margin-right:10px;

      border-radius: 50%;

      cursor: pointer;
      background-color: #d3d3d3;

      &.active{
        background-color: #d35757;
      }
    }
  }
`

export const CategoryItemImage = styled.span `
  display: block;
  width: 48px;
  height: 48px;

  cursor: pointer;
  background: url(${props=>props.imageUrl}) no-repeat;
`