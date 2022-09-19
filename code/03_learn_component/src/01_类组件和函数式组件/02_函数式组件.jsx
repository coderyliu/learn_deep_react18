import React from 'react'

// ?函数式组件有很多缺点（这里不考虑hooks的提出，hooks的提出，弥补了很多函数式组件的缺陷）
// 1.函数式组件中不能维护state状态，因为函数式组件每次setState()之后，都会重新执行函数，也就是render，那这样维护state没有意义
// 2.函数式组件中返回的值和class类组件返回的类型一样
// 3.函数式组件中没有生命周期函数
// 4.函数式组件中的this指向是没有意义的，不能指向组件实例

export default function App(){
  return (
    <div>
      <h2>哈哈哈</h2>
    </div>
  )
}