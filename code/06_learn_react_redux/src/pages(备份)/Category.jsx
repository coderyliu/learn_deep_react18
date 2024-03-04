import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeMulitdata } from "../store/actionCreators";

export class Category extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
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
    changeHomeData() {
      dispatch(fetchHomeMulitdata());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
