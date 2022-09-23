import styled from 'styled-components'

// ?styled-components的简单使用
// todo 借助插件使用高亮语法提示 借用styled.方法使用styled-components

// 3. 使用组件中的state中的变量，并设置默认值 因为styled.其实也是返回一个组件，所以组件的通信也是可以通过props来完成
// 4. 使用外部文件中定义的变量
import {
  smallSize,
  middleSize,
  largeSize,
  primaryColor
} from '../variables/variables'

export const HomeWrapper = styled.div.attrs(props => {
  return {
    textColor: props.color || 'gray'
  }
})
`
  .top{
    border:1px solid #eee;

    /* 1. 嵌套语法 */
    .title{
      color:#f00;
      font-size: ${middleSize}px;
    }
  }

  .bottom{
    .title{
      color:${(props)=>props.textColor};
      font-size: ${(props)=>props.size}px;

      /* 2. &外层的父级选择器 */
      &:hover{
        background-color: ${primaryColor};
      }
    }

    .banner{
      .item{
        margin:5px;
      }
    }
  }
`

// 5. 使用style.提供的继承
export const HomeButton = styled.button `
  border:1px solid green;
  padding:5px 8px;
`

export const HomeButtonWrapper = styled(HomeButton)`
  color:white;
`