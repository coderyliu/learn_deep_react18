import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  padding-top: ${(props) => (props.isHavePadding ? 126 : 0)}px;

  /* transition:all 0.2s linear; */

  .banner-list-item {
    width: 1240px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
