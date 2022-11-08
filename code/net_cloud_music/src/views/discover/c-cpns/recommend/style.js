import styled from 'styled-components'

export const RecommendWrapper=styled.div`
  background-color: #f5f5f5;

  .content-wrapper{
    display: flex;
    width:982px;
    margin:0 auto;

    background-color: #fff;

    .con-left{
      width:729px;
      padding:20px 20px 40px;
      border:1px solid #eeeeee;
      border-bottom: none;
    }

    .con-right{
      width: 251px;
      height: 100px;
      border-right:1px solid #d3d3d3;
      
      box-sizing:content-box ;
    }
  }
`