import React, { PureComponent } from "react";
import withRouter from "../../hoc/widthRouter";

export class Detail extends PureComponent {
  render() {
    const { params } = this.props.router;

    return (
      <div>
        <h2>Detail Page</h2>
        <h2>歌曲类别:{params.id}</h2>
      </div>
    );
  }
}

export default withRouter(Detail);
