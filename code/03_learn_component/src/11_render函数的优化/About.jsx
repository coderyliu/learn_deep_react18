// ?那如果是函数式组件，该怎么样使用像类组件一样继承自PureComponent呢？
// ?react也提供给我们一个memo函数,memo函数传入我们的函数式组件，会返回给我们一个封装好的函数式组件就可以了

import { memo } from "react";

const About=memo(function(props){
  console.log('about render');

  return (
    <div>
      <h2>About Page</h2>
    </div>
  )
})

export default About