import styled from "styled-components";

export const HeaderSectionWrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding:5px 10px;

  border-bottom:2px solid #C10D0C;

  .section-left{
    flex:1;
    display: flex;

    background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -235px -159px;

    .title{
      padding-left:22px;
      font-size: 16px;
      font-weight: 600;
    }

    .btn{
      margin-left:15px;
      padding:5px 15px;
      border:1px solid #d3d3d3;
      border-radius: 5px;

      text-align: center;
      font-size: 12px;
      color:#0c73c2;

      cursor: pointer;
      user-select: none;
    }
  }
  
  .section-right{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:40px;

    .text{
      display: block;
      line-height:10px;
      font-size: 12px;
      color:#666;

      cursor:pointer;

      &:hover{
        text-decoration: underline;
      }
    }

    .icon{
      display: block;
      width:10px;
      height: 10px;
      background: url(${require('@/assets/img/sprite_02.png')}) no-repeat 0 -240px;
    }
  }
`