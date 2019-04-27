import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import CardView from '../../components/CardView/index'

class RedirectBox extends Component {

  render() {
    return (
      <>
        <CardView size='medium' className={"card-view"}>
          <h2>Welcome to React-Weibo</h2>
            <Button variant="primary" size="lg" block>
              Login
            </Button>
        </CardView>
      </>
    )
  }
}

export default RedirectBox