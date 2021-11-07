import './App.css';
import React from 'react';
import { Component } from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/Store'

const configureStore = store()
class App extends Component {

  render() {
    return (
      <Provider store={configureStore}>
        <BrowserRouter>
          <React.Fragment >
            <MainComponent />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;