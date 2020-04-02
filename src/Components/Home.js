import React, { Component } from 'react';
import Search from "../containers/Search"
import '/Users/luismunoz/Documents/Mic-Us-App/mic-us/src/App.css';

class Home extends Component {
  render () {
    return (
      <>
        <div class="home">
          <div class="home__background-image"></div>
        </div>
          <Search/>
      </>
    );
  }
}

export default Home;
