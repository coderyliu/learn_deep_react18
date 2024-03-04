import ThemeContext from "./context/themeContext";

// ?如果是函数式组件怎么使用Context呢
// ?context.Consumer传入一个回调函数来使用
// todo 这个组件可以用在函数式组件中，也可以用在类组件中被不是消费组件的组件来使用context中的defaultValue
function HomeInfo() {
  return (
    <div>
      <h2>Home Info</h2>
      {/* 函数式组件通过Context提供的Consumer组件，传入一个回调函数来使用 */}
      <ThemeContext.Consumer>
        {(value) => {
          console.log(value);
        }}
      </ThemeContext.Consumer>
    </div>
  );
}

export default HomeInfo;
