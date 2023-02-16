import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CateHeaderV1Wrapper } from "./style";
import { changeCurrentSubCateAction } from "@/store/modules/main";

const CateHeaderV1 = memo((props) => {
  const { title, subtitle = "温暖柔软，品质之选", dataInfo } = props;

  // ?点击查看更多
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLoadMore() {
    localStorage.setItem("currentSubCate", JSON.stringify(dataInfo));
    dispatch(changeCurrentSubCateAction(dataInfo));
    navigate(`/category/sub/${dataInfo.id}`);
  }

  return (
    <CateHeaderV1Wrapper>
      <div className="title-wrap">
        <h2 className="title">- {title} -</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
      <p className="more" onClick={() => handleLoadMore()}>
        查看全部 &gt;
      </p>
    </CateHeaderV1Wrapper>
  );
});

CateHeaderV1.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dataInfo: PropTypes.object,
};

export default CateHeaderV1;
