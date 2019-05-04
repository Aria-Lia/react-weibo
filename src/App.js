import React, { Component } from 'react';
import {Layout} from './containers/frame/index'
import MainRouter from './router/index'
import './App.css';

class App extends Component {
  render() {
  const client_secret = process.env.REACT_APP_OPEN_WEIBO_API_KEY
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
