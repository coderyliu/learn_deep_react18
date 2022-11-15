import styled from "styled-components"

export const DownloadSectionWrapper=styled.div`
  margin-top:20px; 
  
  .top{
    width:100%;
    padding-bottom:5px;
    border-bottom:1px solid #d3d3d3;

    color: #333;
    font-size: 14px;
    font-weight: 600;
  }

  .bg_cover{
    width:100%;
    height: 65px;
    margin-top:20px;
    padding-top:60px;

    cursor: pointer;
    background: url(${require('@/assets/img/sprite.png')}) no-repeat 0 -392px;

    .d-text{
      width:100%;
      display: block;
      margin-top:10px;

      font-size: 12px;
      text-align: center;
      color:#999;
    }
  }
`