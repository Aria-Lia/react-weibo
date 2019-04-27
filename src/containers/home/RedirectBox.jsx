import React, { Component } from 'react';

class RedirectBox extends Component {

  render() {
    return (
      <>
        {
          Array(200).fill("").map((item, index) => <div key={index}>{index}</div>)
        }
      </>
    )
  }
}

export default RedirectBox