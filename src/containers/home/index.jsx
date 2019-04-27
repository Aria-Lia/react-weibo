import React, { Component } from 'react';
import './style.css'

class Home extends Component {

  render() {
    return (
      <div className="right-content">
        {
          Array(200).fill("").map((item, index) => <div key={index}>{index}</div>)
        }
      </div>
    )
  }
}

export default Home