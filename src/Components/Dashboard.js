import React, { Component } from 'react';
import Home from './Home'
import SignUp from './SignUp'
import '/Users/luismunoz/Documents/Mic-Us-App/mic-us/src/App.css';

class Dashboard extends Component {
  render () {
    return (
      <>
        <Home/>
        <SignUp/>
      </>
    );
  }
}

export default Dashboard