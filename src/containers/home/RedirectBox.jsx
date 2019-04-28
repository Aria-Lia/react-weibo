import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import CardView from '../../components/CardView/index'

class RedirectBox extends Component {

  render() {
    return (
      <>
        <CardView size='medium'>
          <h2>Welcome to React-Weibo</h2>
          <Button variant="light" size="sm" block  className={"login-button"}>
            Login Page
          </Button>
        </CardView>
      </>
    )
  }
}

export default RedirectBox