import styled from "styled-components"

export const ListenerSectionWrapper=styled.div`
  width:100%;
  
  .top{
    width:100%;
    padding-bottom:5px;

    border-bottom:1px solid #d3d3d3;

    font-size: 14px;
    font-weight: 600;
  }

  .list{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin:10px 0 15px;

    .item{
      width:40px;
      height:40px;
      margin: 5px 5px 0 0;

      cursor: pointer;

      img{
        width:100%;
        height:100%;
      }
    }
  }
`