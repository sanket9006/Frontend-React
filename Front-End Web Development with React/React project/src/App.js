import './App.css';
import React from 'react';
import { Component } from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment >
          <MainComponent />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;