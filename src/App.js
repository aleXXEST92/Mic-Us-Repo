import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Router from '../src/Router'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import '/Users/luismunoz/Documents/Mic-Us-App/mic-us/src/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
} 

  render () {
    return (
      <>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <p className="App-intro">;{this.state.apiResponse}</p>
        <Router />
      </BrowserRouter>
      </Provider>
       </>
    );
  }
}

export default App