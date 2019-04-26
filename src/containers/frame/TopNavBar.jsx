import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class TopNavBar extends Component {

  render() {
    return (
      <Navbar className="top-nav-bar" variant="dark">
        <Navbar.Brand href="#" className="mr-auto nav-bar-brand">
          <span>React</span>-Weibo
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default TopNavBar