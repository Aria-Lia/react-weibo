import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav'

const navKeys = ["Timeline", "Settings"]
class SideNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentKey: null,
    }
  }

  handleSelect(key) {
    const {basePath} = this.props
    this.setState({
      currentKey: key
    }, () => {
      this.props.history.push(`${basePath}/${key}`);
    })
  }

  render() {
    const {currentKey} = this.state
    
    return (
      <Nav className={"flex-column side-nav"} onSelect={key => this.handleSelect(key)}>
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

const mapStateToProps = (state, ownProps) => ({
  basePath: state.appData.basePath
})

export default connect(mapStateToProps)(withRouter(SideNav))