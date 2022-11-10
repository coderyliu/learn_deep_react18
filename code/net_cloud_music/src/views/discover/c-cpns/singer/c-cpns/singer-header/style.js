import styled from 'styled-components'

export const SingerHeaderWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding:5px 0;
  border-bottom:2px solid #C10D0C;

  .section-left{
    flex:1;

    .title{
      font-size: 18px;
      font-weight: 600;
    }
  }
  
  .section-right{
    width:40px;

    .text{
      line-height:10px;
      font-size: 12px;
      color:#666;

      cursor:pointer;

      &:hover{
        text-decoration: underline;
      }
    }
  }
`