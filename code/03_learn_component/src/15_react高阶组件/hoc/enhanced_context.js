import React, { PureComponent } from 'react'
import ThemeContext from '../context/theme_context'

function EnhancedContext(OriginComponent){
  return class extends PureComponent{
    render(){
      return (
        <ThemeContext.Consumer>
          {
            value=>{
              return <OriginComponent {...value}></OriginComponent>
            }
          }
        </ThemeContext.Consumer>
      )
    }
  }
}

export default EnhancedContext