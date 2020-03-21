import React, { Component } from 'react';
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import '/Users/luismunoz/Documents/Mic-Us-App/mic-us/src/App.css';

class App extends Component {
  render () {
    return (
      <>
        <Home/>
        <SignUp/>
      </>
    );
  }
}

export default App