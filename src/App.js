import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Layout} from './containers/frame/index'
import Content from './containers/content/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div className={'bg-image'} />
        <BrowserRouter>
          <Layout>
            <Content />
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
