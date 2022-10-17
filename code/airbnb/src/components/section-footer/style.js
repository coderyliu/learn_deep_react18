import styled from "styled-components";

export const SectionFooterWrapper = styled.div `
  display: flex;
  margin-top:12px;

  .show-name{
    display: flex;
    align-items: center;

    cursor: pointer;

    .name{
      margin-right:8px;

      color:${props=>props.theme.text.primaryColor};
      font-size: 17px;
      font-weight: 700;

      &:hover{
        text-decoration:underline;
      }
    }
  }
`