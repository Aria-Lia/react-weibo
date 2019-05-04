import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Layout} from './containers/frame/index'
import MainRouter from './router/index'
import {getAccessToken} from './redux/actions/index'
import './App.css';

class App extends Component {
  componentDidMount() {
    const {authorizeToken, getAccessToken} = this.props

    if (authorizeToken) {
      getAccessToken()
    }
  }

  render() {
    return (
      <>
        <div className={'bg-image'} />
        <Layout>
            <MainRouter />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  authorizeToken: state.credentialData.authorizeToken
})

const mapDispatchToProps = dispatch => {
  return {
    getAccessToken: () => {
      dispatch(getAccessToken());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
