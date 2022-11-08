import styled from "styled-components";

export const NewDiskItemV1Wrapper = styled.div `
  .inner{
    padding:20px 0 10px 20px;

    .bg-cover{
      width:${props=>props.itemWidth}px;

      background: url(${require('@/assets/img/sprite_cover.png')}) np-repeat 0 -570px;
      
      img{
        width:80%;
        object-fit: cover;
        cursor: pointer;
      }
    }

    .info{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

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