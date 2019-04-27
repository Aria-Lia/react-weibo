import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class TopNavBar extends Component {
  handleSelect = (key) => {
    switch (key) {
      case "home":
      this.props.history.push(`/`);
        break;
    
      default:
        break;
    }
  }

  render() {
    return (
      <>
        <Navbar className="top-nav-bar" variant="dark">
          {/* <Navbar.Brand href="#" className="mr-auto nav-bar-brand">
            <span>React</span>-Weibo
          </Navbar.Brand> */}
          <Nav onSelect={key => this.handleSelect(key)}>
            <Nav.Link className="mr-auto nav-bar-brand" eventKey="home">
              <span className={"brand-1"}>React-</span><span className={"brand-2"}>Weibo</span>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    )
  }
}

export default withRouter(TopNavBar)