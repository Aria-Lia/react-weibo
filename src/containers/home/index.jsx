import React, { Component } from 'react';
import RedirectBox from './RedirectBox'
import './style.css'

class Home extends Component {

  render() {
    return (
      <div className="right-content">
        <RedirectBox />
      </div>
    )
  }
}

export default Home