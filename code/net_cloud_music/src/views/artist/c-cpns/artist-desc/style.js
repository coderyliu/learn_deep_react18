import styled from "styled-components";

export const ArtistDescWrapper=styled.div`
  width:100%;
  margin-top:20px;

  font-size:12px;

  .brief{
    line-height:25px;

    color:#666;
  }

  .introduction{
    width:100%;
    margin-top:30px;

    .item{
      width:100%;
      margin-top:20px;

      .title{
        font-weight:600;
      }

      .content{
        line-height:25px;
        margin-top:10px;

        text-indent:0;
        color:#666;

        white-space:pre-wrap;
      }
    }
  }
`