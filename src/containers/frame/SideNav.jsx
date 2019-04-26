import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'

const navKeys = ["Timeline", "Settings"]
class SideNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentKey: navKeys[0],
    }
  }

  handleSelect(key) {
    this.setState({
      currentKey: key
    })
  }

  render() {
    const {currentKey} = this.state
    return (
      <Nav className={"flex-column side-nav"} defaultActiveKey={navKeys[0]} onSelect={key => this.handleSelect(key)}>
        {
          navKeys.map(e => {
            return (
              <Nav.Link 
                className={currentKey === e ? "side-nav-item-active" : "side-nav-item"} 
                eventKey={e} 
                key={e}
              >
                {e}
              </Nav.Link>
            )
          })
        }
      </Nav>
    )
  }
}

export default SideNav