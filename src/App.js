import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Router from '../src/Router'
import { BrowserRouter } from 'react-router-dom';
import '/Users/luismunoz/Documents/Mic-Us-App/mic-us/src/App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar/>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App