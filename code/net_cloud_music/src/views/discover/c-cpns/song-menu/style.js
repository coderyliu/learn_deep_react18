import styled from 'styled-components'

export const SongMenuWrapper = styled.div `
  position: relative;
  width:100%;

  background-color: #f5f5f5;

  .song-menu-wrapper{
    width:980px;
    margin:0 auto;
    padding:40px;
    border:1px solid #d3d3d3;
    border-bottom:none;

    background-color: #fff;

    .pagination{
      display: flex;
      justify-content: center;
      align-items: center;

      margin-top:50px;
    }
  }
`