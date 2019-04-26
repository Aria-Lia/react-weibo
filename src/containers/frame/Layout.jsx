import React, { Component } from 'react';
import TopNavBar from './TopNavBar'
import SideNav from './SideNav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Layout extends Component {

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col md={2}>
            <SideNav />
          </Col>
          <Col>
            <TopNavBar />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Layout