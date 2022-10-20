import styled from "styled-components";

export const PictureBrowserWrapper = styled.div `
  position: fixed;
  z-index:999;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background-color:rgba(0,0,0);
  display: flex;
  flex-direction: column;

  .top{
    position: relative;
    height:86px;

    .close-btn{
      position: absolute;
      z-index:100;
      right:25px;
      top:15px;
      cursor: pointer;
    }
  }

  .slider-browser{
    position: relative;
    flex:1;
    display: flex;
    justify-content: center;

    .control{
      position: absolute;
      z-index:1000;
      left:0;
      top:0;
      right:0;
      bottom:0;
      display: flex;
      justify-content: space-between;

      .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height:100%;

        color:#fff;
        cursor: pointer;
      }
    }

    > .picture{
      position: relative;
      width:100%;
      max-width:105vh;
      height: 100%;
      overflow: hidden;

      img{
        position: absolute;
        left:0;
        right:0;
        top:0;
        margin:0 auto;
        height:100%;

        user-select: none;
      }

      /* react动画效果 */
      .pic-enter{
        transform:translateX(${props=>props.isNext?'100%':'-100%'});
        opacity:0;
      }

      .pic-enter-active{
        transform:translate(0);
        opacity: 1;
        transition:all 200ms ease;
      }

      .pic-exit{
        opacity: 1;
      }

      .pic-exit-active{
        opacity: 0;
        transition: all 2100ms ease;
      }
    }
  }

  .preview{
    display: flex;
    justify-content: center;
    height:100px;
    margin-top:10px;

    .info{
      position: absolute;
      max-width:105vh;

      .desc{
        display: flex;
        justify-content: space-between;
        width:105vh;
        color:#fff;

        .toggle{
          cursor: pointer;
        }
      }
        
      .indicator{
        margin-top:3px;
        overflow: hidden;

        .item{
          margin-right:15px;
          cursor: pointer;

          img{
            height:67px;
            opacity:0.5;
            object-fit: fill;
          }
            
          &.active{
            img{
              opacity: 1;
            }
          }
        }
      }
    }
  }
`