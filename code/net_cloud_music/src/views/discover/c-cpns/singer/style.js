import styled from 'styled-components'

export const SingerWrapper = styled.div `
  width:100%;
  background-color: #f5f5f5;

  .singer-wrapper{
    display: flex;
    width:980px;
    margin:0 auto;
    border:1px solid #d3d3d3;
    border-bottom:none;

    background-color: #fff;

    .cont-left{
      width:180px;
      padding:40px 10px;
      border-right:1px solid #d3d3d3;
    }

    .cont-right{
      width: 800px;
      padding:20px 40px;
    }
  }
`