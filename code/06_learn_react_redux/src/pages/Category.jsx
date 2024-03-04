import React, { PureComponent } from "react";
import store from "../store";
import { connect } from "react-redux";
import { fetchHomeMulitdata } from "../store/home/actionCreators";

export class Category extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
  }

  render() {
    const { bannerLists, recommends } = this.props;
    // console.log(store.getState());

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
    bannerLists: state.home.bannerLists,
    recommends: state.home.recommends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(fetchHomeMulitdata());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
