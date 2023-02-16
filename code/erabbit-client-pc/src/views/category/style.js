import styled from "styled-components";

export const CategoryWrapper=styled.div`
  width:100%;
  padding-top:${props=>props.isHavePadding?126:0}px;

  background-color:#e7e7e7;

  /* transition:all 0.2s linear */

  .banner-list-item {
    width: 1240px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`