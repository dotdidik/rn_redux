import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux';
import App from './App';
import AddData from './components/AddData';
export default class Routing extends Component {
  render() {
    return (
      <Router>
          <Scene key="root">
            <Scene key="home" component={App} initial={true} hideNavBar={true} />
            <Scene key="adddata" component={AddData} hideNavBar={true} />
          </Scene>
      </Router>
    )
  }
}
