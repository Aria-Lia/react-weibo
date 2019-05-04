import React, { Component } from 'react';
import {Layout} from './containers/frame/index'
import MainRouter from './router/index'
import {getAuthorizeToken} from './utils/index'
import './App.css';

class App extends Component {
  render() {
    const authorizeToken = getAuthorizeToken()
    if (authorizeToken) {
      localStorage.setItem("authorizeToken", authorizeToken)
    } else {
      // Get Token
    }
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

export default App;
