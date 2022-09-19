import React, { PureComponent } from "react";
import EnhancedUserInfo from "./hoc/enhanced_props";

const Home=EnhancedUserInfo(function(props){
  return <h2>Home:{props.name}-{props.age}</h2>
})

const Profile=EnhancedUserInfo(function(props){
  return <h2>Profile:{props.name}-{props.age}-{props.height}</h2>
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Profile height={1.88}></Profile>
      </div>
    )
  }
}

export default App;
