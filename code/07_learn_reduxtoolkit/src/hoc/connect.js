import { PureComponent } from "react";
import providerContext from './provider'

// connect高阶函数的实现
export function connect(mapStateToProps,mapDispatchToProps){
  return function(OriginComponent){
    class NewComponent extends PureComponent{
      constructor(props,context){
        super(props)

        // 利用PureComponent的浅层解析
        this.state=mapStateToProps(context.getState())
      }

      componentDidMount(){
        this.unsubscribe=this.context.subscribe(()=>{
          this.setState(mapStateToProps(this.context.getState()))
        })
      }

      componentWillUnmount(){
        this.unsubscribe()
      }

      render(){
        const stateObj=mapStateToProps(this.context.getState())
        const dispatchObj=mapDispatchToProps(this.context.dispatch)

        return <OriginComponent {...this.props} {...stateObj} {...dispatchObj}></OriginComponent>
      }
    }

    NewComponent.contextType=providerContext

    return NewComponent
  }
}