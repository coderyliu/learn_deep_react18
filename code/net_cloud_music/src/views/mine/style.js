import styled from "styled-components";

export const MineWrapper = styled.div `
  width:100%;

  background-color: #f5f5f5;

  .login-wrap{
    position: relative;
    width:980px;
    height: 700px;
    margin:0 auto;

    border:1px solid #d3d3d3;
    border-bottom:none;

    background-color: #fff;

    .login_cover{
      width:807px;
      height:278px;
      margin:50px auto;

      background: url(${require('@/assets/img/mymusic.png')}) no-repeat  ;
    }

    .login_btn{
      position: absolute;
      z-index: 90;
      top:250px;
      right:201px;
      width:157px;
      height:48px;

      cursor: pointer;
      text-indent: -999px;
    }
  }
`