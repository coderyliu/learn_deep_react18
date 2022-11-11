import styled from "styled-components";

export const RadioItemV1Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  width:150px;
  height: 203px;
  margin-left:37px;

  .picture{
    width: 150px;
    height: 150px;
    cursor: pointer;

    img{
      width:100%;
      height:100%;
      object-fit: cover;
    }
  }

  .info{
    flex:1;
    width:150px;
    margin-top:8px;
    
    .name{
      font-size: 13px;
    }

    .desc{
      color:#666;
      font-size: 12px;
    }

    span{
      display: block;
      width:100%;

      &:hover{
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`