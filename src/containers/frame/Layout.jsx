import React, { Component } from 'react';
import TopNavBar from './TopNavBar'
import SideNav from './SideNav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.css'

class Layout extends Component {

  render() {
    const {children} = this.props
    return (
      <>
        <TopNavBar />

        <Container fluid={true}>
          <Row>
            <Col md={2} className="side-nav-col">
              <SideNav />
            </Col>
            <Col>
              {children}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Layout