import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class TopNavBar extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#" className="mr-auto">
          React-Weibo
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default TopNavBar