import React, { Component } from 'react';
import Navbar from './Navbar'
import Search from "./Search"
import '/Users/luismunoz/Documents/Mic-Us-App/mic-us/src/App.css';

class Home extends Component {
  render () {
    return (
      <>
        <div class="home">
          <div class="home__background-image"></div>
        </div>
          <Navbar/>
          <Search/>
      </>
    );
  }
}

export default Home;