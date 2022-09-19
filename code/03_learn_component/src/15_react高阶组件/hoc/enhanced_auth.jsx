import { PureComponent } from "react";

function EnhancedAuth(OriginComponent) {
  class NewComponent extends PureComponent {
    constructor(){
      super()

      this.state={
        isLogin:true
      }
    }

    render(){
      const {isLogin}=this.state

      // 正常情况下，从storage中获取token
      const token=localStorage.getItem('token')

      return (
        <div>
          <h2>登陆鉴权</h2>
          {
            token?<OriginComponent></OriginComponent>:'请您登录之后在访问'
          }
        </div>
      )

    }
  }

  return NewComponent
}

export default EnhancedAuth;
