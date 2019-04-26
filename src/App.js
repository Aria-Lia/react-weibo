import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Layout} from './containers/frame/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div className={'bg-image'} />
        <BrowserRouter>
          <Layout>
            App
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
