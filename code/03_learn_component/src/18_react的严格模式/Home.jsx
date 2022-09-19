import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  UNSAFE_componentWillMount(){
    console.log('Home');
  }

  render() {
    console.log('Home render');

    return (
      <div><h2>Home Page</h2></div>
    )
  }
}

export default Home