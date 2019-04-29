import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

/**
 * Import Components
 */
import Settings from '../containers/settings/index'
import Timeline from '../containers/timeline/index'
import Home from '../containers/home/index'

class MainRouter extends Component {

  render() {
    const {basePath} = this.props
    return (
      <Switch>
        <Route exact path={basePath} component={Home}/>
        <Route path={`${basePath}/timeline`} component={Timeline}/>
        <Route path={`${basePath}/settings`} component={Settings}/>
      </Switch>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  basePath: state.appData.basePath
})

export default connect(mapStateToProps)(MainRouter)