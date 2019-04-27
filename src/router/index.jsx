import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

/**
 * Import Components
 */
import Settings from '../containers/settings/index'
import Timeline from '../containers/timeline/index'

class MainRouter extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Timeline}/>
        <Route path='/timeline' component={Timeline}/>
        <Route path='/settings' component={Settings}/>
      </Switch>
    )
  }
}

export default MainRouter