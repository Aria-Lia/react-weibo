import React, { Component } from 'react';
import CardView from '../../components/CardView/index'

class RedirectBox extends Component {

  render() {
    return (
      <>
        <CardView size='medium' className={"card-view"}>
          <h2>Welcome to React-Weibo</h2>
        </CardView>
      </>
    )
  }
}

export default RedirectBox