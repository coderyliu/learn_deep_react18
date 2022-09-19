import { PureComponent } from "react";

function EnhancedUserInfo(OriginComponent){
  class NewComponent extends PureComponent{
    constructor(){
      super()

      this.state={
        userInfo:{
          name:'coder',
          age:21
        }
      }
    }

    render(){
      return (
        <OriginComponent {...this.state.userInfo} {...this.props}></OriginComponent>
      )
    }
  }

  return NewComponent
}

export default EnhancedUserInfo