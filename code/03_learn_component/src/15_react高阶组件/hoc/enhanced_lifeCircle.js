import {
  PureComponent
} from "react";

function EnhancedLifeCircle(OriginComponent) {
  class NewComponent extends PureComponent {

    // 这个生命周期已经废弃,建议不要使用
    componentWillMount() {
      this.startTime = new Date().getTime()
    }

    componentDidMount() {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.startTime
      console.log(`当前${OriginComponent.name}页面渲染的时间为${interval}ms`);
    }

    render(){
      return <OriginComponent></OriginComponent>
    }
  }

  return NewComponent
}

export default EnhancedLifeCircle