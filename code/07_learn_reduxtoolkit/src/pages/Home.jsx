import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../store/counter";

export class Home extends PureComponent {
  increment(num) {
    this.props.addNumber(num);
  }

  render() {
    const { counter } = this.props;

    return (
      <div className="home">
        <h2>Home Counter {counter}</h2>
        <button onClick={(e) => this.increment(1)}>+1</button>
        <button onClick={(e) => this.increment(5)}>+5</button>
        <button onClick={(e) => this.increment(10)}>+10</button>
        {/* <h2>轮播图数据</h2>
        <ul>
          {
            banners.map((item,index)=>{
              return (
                <li key={index}>{item.title}</li>
              )
            })
          }
        </ul> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  // banners:state.counter.banners
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
