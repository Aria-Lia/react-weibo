import React, { Component } from 'react';
import {Layout} from './containers/frame/index'
import MainRouter from './router/index'
import './App.css';

class App extends Component {
  render() {
    const API_KEY = process.env.REACT_APP_OPEN_WEIBO_API_KEY
    const URL = window.location.href
    if (URL) {
      const tokenFlag = "code="
      const authorizeToken = URL.slice(URL.indexOf(tokenFlag) + tokenFlag.length)
      console.log(authorizeToken)
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
