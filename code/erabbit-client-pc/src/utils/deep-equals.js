import _ from 'lodash'

// ?判断两个数组是否相等 数组包含对象
// todo 方法一：循环深度判断
function arraysEqualOne(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    // 如果当前元素为对象，调用deepEquals进行递归比较
    if (typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
      if (!deepEquals(arr1[i], arr2[i])) return false
    } else if (arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true
}

// todo 方法二：是用JSON.stringify()转化为json字符串进行比较 
// todo 缺点是无法比较对象的属性值的顺序是否相同，但在大多数情况下是可行的
function arraysEqualTwo(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// todo 方法三：借助lodash库的isEqual()方法判断两个数组是否相等
function arraysEqualThree(arr1, arr2) {
  return _.isEqual(arr1, arr2);
}

// ?递归判断两个对象是否相等
// todo 在js中，对象是引用数据类型，如果两个对象的在内存的地址不同，认为两个对象实不相等的
// todo 但是如果两个对象的属性名和属性值是相等的，认为两个对象是相等的
// todo 因此，可以采用深度递归判断两个对象是否相等
function deepEquals(obj1, obj2) {
  // 判断对象长度是否相等
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

  for (let key in obj1) {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!deepEquals(obj1[key], obj2[key])) return false
    } else if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}

export {
  arraysEqualOne,
  arraysEqualTwo,
  arraysEqualThree,
  deepEquals
}