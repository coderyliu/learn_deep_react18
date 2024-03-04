import React, { PureComponent } from "react";

// ?这里要说的不可变数据的力量，指的是在使用pureComponent的时候如何使用setState()去改变state中的数据，重新执行render函数
// ?主要还是和PureComponent的性能优化原理有关
// todo 我们不使用PureComponent，那么这时候我们是自己通过shouldComponentUpdate来判断的
// todo 使用PureComponent原理也是它内部对shouldComponentUpdate进行了优化，而不用我们手动优化
// todo 其实内部是通过shallowEquals进行了state|props的浅层解析判断
// todo 浅层而不是深层，即只判断state|props的第一层key，而不关心值的类型
// ?如果基本数据类型的值变化了，return true，shouldComponentUpdate会执行return true，执行render函数，反之
// ?如果是引用数据类型，只关心对象的指针地址变没变化，如果变化shouldComponentUpdate return true执行render函数，反之

//?那么这样在PureComponent中使用SetState()的时候，我们也要这样修改
export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      books: [
        { name: "你不知道的javascript", price: 99, count: 1 },
        { name: "高级程序设计Javascript", price: 129, count: 1 },
        { name: "深入浅出NodeJs", price: 59, count: 1 },
        { name: "深入浅出VueJs", price: 79, count: 1 },
        { name: "算法图论", price: 159, count: 1 },
      ],
    };
  }

  addBookClick() {
    // ?注意：最重要的点就在这里
    // ?我们的PureComponent判断是否更新render函数，是浅层解析判断
    // todo 方式一：setState()错误做法
    const newBook = { name: "大话数据结构", price: 39, count: 1 };
    // todo 这样做，内存当中books数组的指针并没有改变，所以render函数不会重新执行
    // this.state.books.push(newBook)
    // this.setState({
    //   books:this.state.books
    // })

    // todo 方式二：正确做法，改变内存地址，创建新的对象
    const bookLists = [...this.state.books];
    bookLists.push(newBook);
    this.setState({
      books: bookLists,
    });
  }

  increment(index) {
    // ?同样，对于对象内部的每个属性的修改，我们也要改变整个对象的内存地址，而不是单纯的修改某个值
    const bookLists = [...this.state.books];
    bookLists[index].count++;
    this.setState({
      books: bookLists,
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <h2>书籍列表</h2>
        <ul>
          {books.map((item, index) => {
            return (
              <div key={index}>
                <li>
                  {item.name}-{item.price}-{item.count}
                </li>
                <button onClick={() => this.increment(index)}>+1</button>
              </div>
            );
          })}
        </ul>

        <button onClick={() => this.addBookClick()}>添加书籍</button>
      </div>
    );
  }
}

export default App;
