import React, { PureComponent } from "react";

// ?TransitionGroup的使用
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./style.css";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      books: [
        { name: "你不知道的Javascript", price: 99 },
        { name: "算法导论", price: 69 },
        { name: "高级程序设计Javascript", price: 129 },
        { name: "深入浅出NodeJS", price: 79 },
      ],
    };
  }

  addBookItem() {
    const newBook = { name: "深入浅出VueJS", price: 79 };
    const bookLists = [...this.state.books];
    bookLists.push(newBook);
    this.setState({ books: bookLists });
  }

  removeBookItem(index) {
    const bookLists = [...this.state.books];
    bookLists.splice(index, 1);
    this.setState({ books: bookLists });
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <h2>图书列表</h2>
        <TransitionGroup component="ul">
          {books.map((value, index) => {
            return (
              // ?TransitionGroup必须和CSSTransition一起结合使用
              <CSSTransition
                classNames="coder"
                unmountOnExit={true}
                key={value.name}
                timeout={2000}
              >
                <li key={value.name}>
                  <span>
                    {value.name}-{value.price}
                  </span>
                  <button onClick={() => this.removeBookItem(index)}>
                    移除
                  </button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={() => this.addBookItem()}>添加图书</button>
      </div>
    );
  }
}

export default App;
