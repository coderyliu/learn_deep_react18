// todo 利用这个库来随机模拟数据
import { faker } from '@faker-js/faker';

const namesArr=Array(1000).fill(' ').map(item=>{
  return faker.name.fullName()
})

export default namesArr
