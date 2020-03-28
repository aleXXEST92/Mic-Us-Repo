import React, { Component } from 'react';
import Home from './Home'
import Incentives from './Incentives'
import SignUpButton from './SignUpButton'
import '/Users/luismunoz/Documents/Mic-Us-App/mic-us/src/App.css';

class Dashboard extends Component {
  render () {
    return (
      <>
        <Home/>
        <Incentives/>
        <SignUpButton/>
      </>
    );
  }
}

export default Dashboard