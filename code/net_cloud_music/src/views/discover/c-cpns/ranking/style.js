import styled from 'styled-components'

export const RankingWrapper=styled.div`
  width:100%;
  background-color:#f5f5f5 ;

  .rank-inner{
    display: flex;
    width: 980px;
    margin:0 auto;
    border:1px solid #d3d3d3;
    border-bottom: none;

    background-color: #fff;

    .con-left{
      width: 240px;

      border-right:1px solid #d3d3d3;
      background-color: #f5f5f5;
    }

    .con-right{
      width: 740px;
      padding:20px;
    }
  }
`