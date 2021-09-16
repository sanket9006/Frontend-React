import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import React from 'react';
import dishes from '../shared/dishes';
import { Component } from 'react';
import DishDetailComponent from './DishdetailComponent';

class MainComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: dishes,
      selectedDish: null
    }
  }


  selectDish(dishId) {
    this.setState({ selectedDish: dishId })
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

        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.selectDish(dishId)}
        />

        <DishDetailComponent
          dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
        />
      </React.Fragment>
    )
  }
}

export default MainComponent;