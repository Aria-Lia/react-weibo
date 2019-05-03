import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import CardView from '../../components/CardView/index'

class RedirectBox extends Component {

  render() {
    const {authUrl} = this.props
    return (
      <>
        <CardView size='medium'>
          <h2>Welcome to React-Weibo</h2>
          <Button 
            variant="light" 
            size="sm" 
            block 
            className={"login-button"} 
            href={authUrl}
          >
            Login Page
          </Button>
        </CardView>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  authUrl: state.appData.authUrl
})

export default connect(mapStateToProps)(RedirectBox)