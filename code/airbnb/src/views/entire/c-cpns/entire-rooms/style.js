import styled from "styled-components";

export const EntireRoomWrapper = styled.div `
  position: relative;
  padding:130px 20px 20px;

  .entire-title{
    color:${props=>props.theme.text.secondaryColor};
    font-size: 22px;
    font-weight: 700;
    margin-right:10px;
  }

  .entire-list{
    display: flex;
    flex-wrap: wrap;
  }

  .entire-cover{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color:rgba(255,255,255,.8);
    z-index:99;
  }
`