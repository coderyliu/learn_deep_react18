import React, { Component } from 'react'
import eventBus from './utils/eventBus'

export class Home extends Component {
  componentDidMount(){
    eventBus.emit('info','coder',21,1.88)
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

export default Home