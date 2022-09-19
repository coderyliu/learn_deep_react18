import React, { PureComponent } from 'react'
import EnhancedLifeCircle from '../hoc/enhanced_lifeCircle'

export class Profile extends PureComponent {
  // 这个生命周期已经废弃,建议不要使用
  // componentWillMount(){
  //   this.startTime=new Date().getTime()
  // }

  // componentDidMount(){
  //   this.endTime=new Date().getTime()
  //   const interval=this.endTime-this.startTime
  //   console.log(`当前页面渲染的时间为${interval}ms`);
  // }

  render() {
    return (
      <div>Profile Page</div>
    )
  }
}

export default EnhancedLifeCircle(Profile)