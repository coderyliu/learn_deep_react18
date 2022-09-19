// const arr = [1, 2, 3]

// const ret = arr.some((v) => {
//   return v === 3
// })

// console.log(ret)

// ?高阶函数的定义：必须满足其中一个条件
// ?1.函数可以接受一个函数或者多个函数作为参数
// ?2.返回一个新的函数

// todo 数组常用的高阶函数有很多
// 比如filter,map,reduce等
const arr=[1,2,3]
const newArr=arr.map((value,index)=>{
  return value*2
})

