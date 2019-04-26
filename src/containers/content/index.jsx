import React, { Component } from 'react';
import './style.css'

class Content extends Component {

  render() {
    return (
      <div className="right-content">
        {
          Array(200).fill("123").map((item, index) => <div key={index}>{item}</div>)
        }
      </div>
    )
  }
}

export default Content