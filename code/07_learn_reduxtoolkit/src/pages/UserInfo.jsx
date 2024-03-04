import React, { PureComponent } from "react";
import { connect } from "../hoc";
import { changeName } from "../store/user";

export class UserInfo extends PureComponent {
  changeUserInfo() {
    this.props.changeNickName("curry");
  }

  render() {
    const { name, age, height } = this.props;

    return (
      <div>
        <h2>nickName:{name}</h2>
        <h2>age:{age}</h2>
        <h2>height:{height}</h2>
        <button onClick={(e) => this.changeUserInfo()}>修改信息</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  age: state.user.age,
  height: state.user.height,
});

const mapDispatchToProps = (dispatch) => ({
  changeNickName(name) {
    dispatch(changeName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
