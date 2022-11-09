import styled from "styled-components";

export const NewDiskItemV1Wrapper = styled.div `
  .inner{
    display: flex;
    flex-direction: column;

    width:20%;
    padding:20px 0 10px ${props=>props.paddingLeft}px;

    .bg-cover{
      position:relative;
      box-sizing: border-box;
      padding:66.66% 0 0;
      overflow: hidden;
      width:${props=>props.itemWidth}px;
      height:${props=>props.itemHeight}px;

      background: url(${require('@/assets/img/sprite_cover.png')}) np-repeat 0 -570px;
      
      img{
        position: absolute;
        left:0;
        top:0;
        width:${props=>props.imgWidth}%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }

    .info{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width:${props=>props.itemWidth}px;

      .song:hover,
      .singer:hover{
        text-decoration:underline;
        cursor: pointer;
      }

      .singer{
        color:#666;
      }
    }
  }
`