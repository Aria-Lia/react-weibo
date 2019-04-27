import React, { Component } from 'react';
import {Layout} from './containers/frame/index'
import MainRouter from './router/index'
import './App.css';

class App extends Component {
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

export default App;
