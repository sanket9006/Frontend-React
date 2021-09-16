import './App.css';
import React from 'react';
import { Component } from 'react';
import MainComponent from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <React.Fragment >
        <MainComponent />
      </React.Fragment>
    )
  }
}

export default App;