import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'

class SideNav extends Component {

  render() {
    return (
      <Nav className={"flex-column side-nav"}>
        <Nav.Link eventKey="timeline">Timeline</Nav.Link>
        <Nav.Link eventKey="settings">Settings</Nav.Link>
      </Nav>
    )
  }
}

export default SideNav