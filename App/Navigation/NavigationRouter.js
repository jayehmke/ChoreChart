import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
// import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import GoalsList from '../Containers/GoalsList'
import CardExample from '../Containers/CardExample'
import Login from '../Containers/LoginScreen'

/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene initial key='login' component={Login} title='Login' />
          <Scene key='launchScreen' component={LaunchScreen} title='LaunchScreen' />
          <Scene key='goalsList' component={GoalsList} />
          <Scene key='cardExample' component={CardExample} />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
