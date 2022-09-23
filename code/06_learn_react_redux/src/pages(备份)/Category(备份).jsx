import React, { PureComponent } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  changeBannersAction,
  changeRecommendsAction,
} from "../store/actionCreators";

export class Category extends PureComponent {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    // 异步请求
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const bannerLists = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      this.props.changeBannerAction(bannerLists);
      this.props.changeRecommendAction(recommends);
    });
  }

  render() {
    const { bannerLists, recommends } = this.props;

    return (
      <div>
        <h2>Category Page</h2>
        <ul>
          {bannerLists.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
          {recommends.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bannerLists: state.bannerLists,
    recommends: state.recommends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBannerAction(banners) {
      dispatch(changeBannersAction(banners));
    },
    changeRecommendAction(recommends) {
      dispatch(changeRecommendsAction(recommends));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
