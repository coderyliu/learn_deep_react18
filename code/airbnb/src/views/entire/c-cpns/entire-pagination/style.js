import styled from "styled-components";

export const EntirePaginationWrapper = styled.div `
  margin-top:20px;

  .pagination{
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page{
      font-size: 18px;

      &:hover{
        text-decoration:underline;
      }
    }

    .MuiPaginationItem-page.Mui-selected{
      background-color:#222;
      color:#fff;
    }

    .info{
      margin-top:16px;
      font-size: 16px;
    }
  }
`