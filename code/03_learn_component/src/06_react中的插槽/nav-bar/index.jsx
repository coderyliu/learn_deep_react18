import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./style.css";

export class NavBar extends Component {
  render() {
    const { children } = this.props;
    console.log(children)

    return (
      <div className="nav-bar">
        {/* 这种方式拿到的this.props.children是一个数组，前提是父组件传过来的是多个子元素，如果只传递一个子元素，children是一个元素 */}
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    );
  }
}

NavBar.propTypes={
  children:PropTypes.arrayOf(PropTypes.element)
}

export default NavBar;
