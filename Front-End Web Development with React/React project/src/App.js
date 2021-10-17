import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent'
import React from 'react';
import dishes from './shared/dishes';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: dishes
    }
  }

  render() {
    return (
      <React.Fragment >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand >
              sanketpatil.co
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </React.Fragment>
    )
  }
}

export default App;