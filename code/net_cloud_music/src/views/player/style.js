import styled from "styled-components";

export const PlayerWrapper=styled.div`
  width:100%;
  margin-top:30px;

  background-color: #f5f5f5;

  .player-wrapper{
    display: flex;
    width:980px;
    margin:0 auto;

    border:1px solid #d3d3d3;
    border-bottom:none;

    background-color: #fff;

    .left-wrap{
      width:710px;
      padding:30px 40px;
      border-right:1px solid #d3d3d3;
    }

    .right-wrap{
      width:270px;

      padding:30px;
    }
  }
`