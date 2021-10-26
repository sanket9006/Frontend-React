import Menu from './MenuComponent'
import React from 'react';
import dishes from '../shared/dishes';
import { Component } from 'react';
import DishDetailComponent from './DishdetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

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
        <HeaderComponent />
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.selectDish(dishId)}
        />

        <DishDetailComponent
          dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
        />

        <FooterComponent />
      </React.Fragment>
    )
  }
}

export default MainComponent;